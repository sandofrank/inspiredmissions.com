# Inspired Missions Website

A modern, redesigned Next.js website for Inspired Missions with a powerful blog system, fully migrated and enhanced from the original Squarespace site.

## ✨ What Was Done

This project successfully migrated and **completely redesigned** the Squarespace website to Next.js with the following features:

1. **Next.js 15** with App Router and TypeScript
2. **MDX Blog System** - All 43 blog posts converted from HTML to MDX
3. **Modern Design System** - Complete visual refresh with professional styling
4. **Responsive Design** - Mobile-first approach with working mobile navigation
5. **Performance Optimized** - Static site generation for lightning-fast loading

## 🎨 Modern Design Refresh

### New Color Palette
We've replaced the outdated teal color scheme with a modern, mission-focused palette:

- **Primary (Deep Blue):** `#1e40af` - Trust, Stability, Faith
- **Secondary (Warm Amber):** `#f59e0b` - Hope, Light, Warmth
- **Accent (Fresh Green):** `#10b981` - Growth, Life, Renewal

### Typography Improvements
- **Headings:** Playfair Display (elegant serif)
- **Body:** Inter (modern sans-serif)
- Enhanced readability with proper line-height and spacing
- Professional letter-spacing and font weights

### Visual Enhancements
- **Gradient Backgrounds** - Modern blue gradients for hero sections
- **Card Hover Effects** - Smooth animations and shadows
- **Icon Integration** - Custom SVG icons for each purpose pillar
- **Image Optimization** - Hover scale effects and proper aspect ratios
- **Button Styles** - Gradient buttons with hover states and shadows

## 📄 Page-by-Page Improvements

### Homepage (`/`)
**Before:** Basic layout with outdated colors
**After:**
- ✅ Stunning gradient hero section with compelling CTAs
- ✅ Redesigned "Our Purpose" cards with icons and hover effects
- ✅ Modern missionary profiles with alternating layouts
- ✅ Featured blog posts grid with image hover effects
- ✅ Improved spacing and visual hierarchy throughout

### Blog Listing (`/blog`)
**Before:** Simple grid layout
**After:**
- ✅ Beautiful gradient hero banner
- ✅ Enhanced card design with smooth hover animations
- ✅ Better typography and date formatting
- ✅ Improved "Read more" links with animated arrows
- ✅ Professional post count display

### Blog Post Pages (`/blog/[slug]`)
**Before:** Basic article layout
**After:**
- ✅ Hero image overlay with title and metadata
- ✅ Enhanced prose styles for better readability
- ✅ Improved typography hierarchy
- ✅ Professional "Back to blog" navigation
- ✅ Call-to-action at the end of posts

### Header & Navigation
**Before:** Static navigation bar
**After:**
- ✅ Clean, modern sticky header
- ✅ **Fully functional mobile navigation** with hamburger menu
- ✅ Smooth transitions and hover states
- ✅ Prominent "Donate" button with gradient styling
- ✅ Logo integration from original site

### Footer
**Before:** Basic footer with limited info
**After:**
- ✅ Three-column layout (About, Quick Links, Contact)
- ✅ Social media icons with hover effects
- ✅ Complete contact information
- ✅ Professional dark theme
- ✅ All original content preserved

## Project Structure

```
inspiredmissions.com/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout (simplified with components)
│   ├── page.tsx             # Redesigned home page
│   ├── blog/                # Blog pages
│   │   ├── page.tsx         # Enhanced blog listing
│   │   └── [slug]/          # Improved blog post pages
│   │       └── page.tsx
│   └── globals.css          # Modern design system
├── components/
│   ├── Header.tsx           # Responsive header with mobile nav
│   └── Footer.tsx           # Professional footer
├── lib/
│   └── blog.ts              # Blog utilities for MDX
├── content/
│   └── blog/                # MDX blog posts (43 posts)
├── archive/                 # Original Squarespace HTML files
├── convert-to-mdx.js        # Conversion script
└── package.json
```

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Available Routes

- `/` - Home page
- `/about-cambodia` - About Cambodia ministries page
- `/blog` - Blog listing page (shows all 43 blog posts)
- `/blog/[slug]` - Individual blog post pages

## Blog Posts

All 43 blog posts have been converted from the archived Squarespace site to MDX format.

### MDX Format

Each blog post is an MDX file with frontmatter:

```mdx
---
title: "Post Title"
description: "Post description"
date: "YYYY-MM-DD"
author: "Author Name"
image: "Image URL"
---

## Content goes here

Your blog post content with markdown formatting...
```

### Converting More Posts

If you need to convert additional blog posts from the archive:

```bash
npm run convert
```

This will process all HTML files in `archive/www.inspiredmissions.com/inspired-news/` and create MDX files in `content/blog/`.

## Images

### Homepage Images (Local)
All homepage images are now hosted locally:

✅ **Hosted Locally** (`public/images/`):
- `hero-angkor-wat.jpg` (191KB) - Hero section background (Angkor Wat, Cambodia)
- `curtis-breann.jpg` (824KB) - Curtis & Breann missionary photo
- `andy-sam.jpg` (232KB) - Andy & Sam missionary photo

**Purpose Section:** Uses custom SVG icons (Bible, People, Heart) instead of images

🌐 **Still on CDN**:
- All 43 blog post images

### Blog Images
All blog post images are still served from Squarespace's CDN (`images.squarespace-cdn.com`). The blog images will continue to work as long as the CDN remains accessible.

**Note:** The archived website download only contained HTML files with image URLs, not the actual image files. Homepage images were successfully downloaded from the live inspiredmissions.com website.

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy:

1. Push to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

## Customization

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Blog post prose styles: Uses Tailwind Typography (consider adding `@tailwindcss/typography` for better blog post formatting)

### Content

- Edit the home page: `app/page.tsx`
- Edit the blog listing: `app/blog/page.tsx`
- Edit blog post layout: `app/blog/[slug]/page.tsx`
- Navigation: `app/layout.tsx`

## Next Steps

1. **Add Tailwind Typography** for better blog post formatting:
   ```bash
   npm install @tailwindcss/typography
   ```
   Then add to `tailwind.config.ts`:
   ```js
   plugins: [require('@tailwindcss/typography')]
   ```

2. **Download Images Locally** - Create a script to download all images from the blog posts

3. **Add More Pages** - Create About, Contact, or other pages as needed

4. **SEO Optimization** - Add meta tags, Open Graph tags, etc.

5. **Analytics** - Add Google Analytics or other tracking

6. **Contact Form** - Add a contact form for visitors

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **next-mdx-remote** - MDX rendering in Next.js
- **gray-matter** - Frontmatter parsing
- **jsdom** - HTML parsing for conversion script
