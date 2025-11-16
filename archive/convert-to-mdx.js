#!/usr/bin/env node

/**
 * Script to convert Squarespace HTML blog posts to MDX files
 *
 * Usage: node convert-to-mdx.js
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Configuration
const INPUT_DIR = './archive/www.inspiredmissions.com/inspired-news';
const OUTPUT_DIR = './content/blog';
const IMAGE_OUTPUT_DIR = './public/images/blog';

// Create output directories if they don't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

if (!fs.existsSync(IMAGE_OUTPUT_DIR)) {
  fs.mkdirSync(IMAGE_OUTPUT_DIR, { recursive: true });
}

/**
 * Extract metadata from HTML meta tags
 */
function extractMetadata(doc) {
  const metadata = {
    title: '',
    description: '',
    date: '',
    author: '',
    image: '',
    slug: ''
  };

  // Extract title
  const ogTitle = doc.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    metadata.title = ogTitle.getAttribute('content').replace(' — Inspired Missions', '').trim();
  }

  // Extract description
  const ogDescription = doc.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    metadata.description = ogDescription.getAttribute('content').trim();
  }

  // Extract date
  const datePublished = doc.querySelector('meta[itemprop="datePublished"]');
  if (datePublished) {
    metadata.date = datePublished.getAttribute('content').split('T')[0]; // YYYY-MM-DD format
  }

  // Extract author
  const author = doc.querySelector('meta[itemprop="author"]');
  if (author) {
    metadata.author = author.getAttribute('content').trim();
  }

  // Extract featured image
  const ogImage = doc.querySelector('meta[property="og:image"]');
  if (ogImage) {
    metadata.image = ogImage.getAttribute('content');
  }

  // Extract slug from canonical URL
  const canonical = doc.querySelector('link[rel="canonical"]');
  if (canonical) {
    const href = canonical.getAttribute('href');
    metadata.slug = href.split('/').pop().replace('.html', '');
  }

  return metadata;
}

/**
 * Convert HTML content to Markdown
 */
function htmlToMarkdown(element) {
  if (!element) return '';

  let markdown = '';

  // Process child nodes
  element.childNodes.forEach(node => {
    if (node.nodeType === 3) { // Text node
      markdown += node.textContent;
    } else if (node.nodeType === 1) { // Element node
      const tagName = node.tagName.toLowerCase();

      switch (tagName) {
        case 'h1':
          markdown += `\n## ${node.textContent.trim()}\n\n`;
          break;
        case 'h2':
          markdown += `\n### ${node.textContent.trim()}\n\n`;
          break;
        case 'h3':
          markdown += `\n#### ${node.textContent.trim()}\n\n`;
          break;
        case 'p':
          const text = node.textContent.trim();
          if (text) {
            markdown += `${text}\n\n`;
          }
          break;
        case 'strong':
        case 'b':
          markdown += `**${node.textContent.trim()}**`;
          break;
        case 'em':
        case 'i':
          markdown += `*${node.textContent.trim()}*`;
          break;
        case 'a':
          const href = node.getAttribute('href');
          markdown += `[${node.textContent.trim()}](${href})`;
          break;
        case 'ul':
          node.querySelectorAll('li').forEach(li => {
            markdown += `- ${li.textContent.trim()}\n`;
          });
          markdown += '\n';
          break;
        case 'ol':
          node.querySelectorAll('li').forEach((li, index) => {
            markdown += `${index + 1}. ${li.textContent.trim()}\n`;
          });
          markdown += '\n';
          break;
        case 'br':
          markdown += '\n';
          break;
        case 'hr':
          markdown += '\n---\n\n';
          break;
        case 'img':
          const src = node.getAttribute('data-src') || node.getAttribute('src');
          const alt = node.getAttribute('alt') || '';
          if (src) {
            markdown += `\n![${alt}](${src})\n\n`;
          }
          break;
        default:
          // For other elements, process their children
          markdown += htmlToMarkdown(node);
      }
    }
  });

  return markdown;
}

/**
 * Extract and convert blog post content
 */
function extractContent(doc) {
  let content = '';

  // Find the main content area
  const entryContent = doc.querySelector('.entry-content');
  if (!entryContent) return content;

  // Find all content blocks
  const contentBlocks = entryContent.querySelectorAll('.sqs-html-content, .sqs-block-image');

  contentBlocks.forEach(block => {
    if (block.classList.contains('sqs-html-content')) {
      // Text content
      content += htmlToMarkdown(block);
    } else if (block.classList.contains('sqs-block-image')) {
      // Image block
      const img = block.querySelector('img[data-src], img[src]');
      if (img) {
        const src = img.getAttribute('data-src') || img.getAttribute('src');
        const alt = img.getAttribute('alt') || '';
        if (src) {
          content += `\n![${alt}](${src})\n\n`;
        }
      }
    }
  });

  return content.trim();
}

/**
 * Create MDX file with frontmatter
 */
function createMDXFile(metadata, content, outputPath) {
  const frontmatter = `---
title: "${metadata.title.replace(/"/g, '\\"')}"
description: "${metadata.description.replace(/"/g, '\\"')}"
date: "${metadata.date}"
author: "${metadata.author}"
image: "${metadata.image}"
---

`;

  const mdxContent = frontmatter + content;
  fs.writeFileSync(outputPath, mdxContent, 'utf8');
}

/**
 * Process a single HTML file
 */
function processHTMLFile(filePath) {
  try {
    const html = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    // Extract metadata
    const metadata = extractMetadata(doc);

    if (!metadata.slug) {
      console.log(`Skipping ${path.basename(filePath)} - no slug found`);
      return;
    }

    // Extract content
    const content = extractContent(doc);

    if (!content) {
      console.log(`Skipping ${metadata.slug} - no content found`);
      return;
    }

    // Create MDX file
    const outputPath = path.join(OUTPUT_DIR, `${metadata.slug}.mdx`);
    createMDXFile(metadata, content, outputPath);

    console.log(`✓ Converted: ${metadata.slug}.mdx`);

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

/**
 * Main function
 */
function main() {
  console.log('Starting conversion of HTML blog posts to MDX...\n');

  // Get all HTML files
  const files = fs.readdirSync(INPUT_DIR)
    .filter(file => file.endsWith('.html') && !file.includes('﹖'))
    .map(file => path.join(INPUT_DIR, file));

  console.log(`Found ${files.length} blog posts to convert\n`);

  // Process each file
  files.forEach(processHTMLFile);

  console.log(`\nConversion complete!`);
  console.log(`MDX files saved to: ${OUTPUT_DIR}`);
  console.log(`\nNote: Images are still referenced from their original URLs.`);
  console.log(`You may want to download them locally to ${IMAGE_OUTPUT_DIR}`);
}

// Run the script
main();
