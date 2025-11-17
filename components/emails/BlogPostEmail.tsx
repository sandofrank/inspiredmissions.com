import { marked } from 'marked'

interface BlogPostEmailProps {
  title: string
  excerpt: string
  date: string
  slug: string
  image?: string
  content?: string
  baseUrl?: string
}

// Helper function to convert MDX to email-friendly HTML
function convertMDXToHTML(content: string, baseUrl: string = 'https://inspiredmissions.com'): string {
  let htmlContent = content

  // First, handle Gallery components - use placeholder approach
  const galleryMatches = htmlContent.match(/<Gallery\s+images=\{(\[[\s\S]*?\])\}\s*\/>/g)

  const galleryPlaceholders: { [key: string]: string } = {}
  let galleryIndex = 0

  htmlContent = htmlContent.replace(
    /<Gallery\s+images=\{(\[[\s\S]*?\])\}\s*\/>/g,
    (match, imagesArray) => {
      try {
        // Extract image paths from the array
        const imageMatches = imagesArray.match(/['"]([^'"]+)['"]/g)
        if (!imageMatches) return ''

        const images = imageMatches.map((m: string) => m.replace(/['"]/g, ''))

        // Generate Gallery HTML as a 3-column grid using table (email-safe)
        // Use fixed dimensions for better email client compatibility
        let tableRows = ''
        for (let i = 0; i < images.length; i += 3) {
          const row = images.slice(i, i + 3)
          const cells = row.map((img: string) =>
            `<td align="center" valign="top" style="padding: 4px;">
              <img src="${baseUrl}${img}" alt="Gallery image" width="180" height="180" style="width: 180px; height: 180px; object-fit: cover; display: block; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
            </td>`
          ).join('')

          // Fill empty cells if row has less than 3 images
          const emptyCells = 3 - row.length
          const emptyHTML = emptyCells > 0 ? '<td style="padding: 4px;"></td>'.repeat(emptyCells) : ''

          tableRows += `<tr>${cells}${emptyHTML}</tr>`
        }

        const fullHTML = `<div style="margin: 30px 0;"><table cellpadding="0" cellspacing="0" border="0" align="center" style="border-collapse: collapse;"><tbody>${tableRows}</tbody></table></div>`

        // Store HTML and return placeholder
        // Use GALLERYPLACEHOLDER instead of ___ to avoid markdown emphasis syntax
        const placeholder = `GALLERYPLACEHOLDER${galleryIndex}ENDPLACEHOLDER`
        galleryPlaceholders[placeholder] = fullHTML
        galleryIndex++
        return placeholder
      } catch (e) {
        console.error('Gallery parsing error:', e)
        return ''
      }
    }
  )

  // Now remove Icon components
  htmlContent = htmlContent.replace(/<[A-Z][a-zA-Z]*[^>]*\/>/g, '')

  // Also remove any opening/closing tags for components
  htmlContent = htmlContent.replace(/<\/?[A-Z][a-zA-Z]*[^>]*>/g, '')

  // Clean up any extra blank lines left from removing components
  htmlContent = htmlContent.replace(/\n{3,}/g, '\n\n')

  // Convert markdown to HTML first (with default rendering)
  let html = marked.parse(htmlContent, { async: false }) as string

  // Now post-process the HTML to add styles and fix image URLs
  // Fix image URLs to be absolute (but skip Gallery images which already have absolute URLs and styles)
  html = html.replace(/<img src="([^"]+)"/g, (match, src) => {
    if (src.startsWith('http')) {
      // This is already an absolute URL (from Gallery component), don't modify it
      return match
    }
    // Regular markdown image - make URL absolute and add styling
    const absoluteSrc = `${baseUrl}${src}`
    return `<img src="${absoluteSrc}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 20px 0; display: block;"`
  })

  // Replace Gallery placeholders with actual HTML
  Object.keys(galleryPlaceholders).forEach(placeholder => {
    // Need to handle placeholders that are wrapped in <p> tags
    const pWrappedPattern = new RegExp(`<p[^>]*>${placeholder}<\\/p>`, 'g')
    const plainPattern = new RegExp(placeholder, 'g')

    if (html.match(pWrappedPattern)) {
      html = html.replace(pWrappedPattern, galleryPlaceholders[placeholder])
    } else if (html.match(plainPattern)) {
      html = html.replace(plainPattern, galleryPlaceholders[placeholder])
    }
  })

  // Style headings
  html = html.replace(/<h1>/g, '<h1 style="color: #032EA1; font-size: 32px; font-weight: bold; margin: 30px 0 15px 0; line-height: 1.3;">')
  html = html.replace(/<h2>/g, '<h2 style="color: #032EA1; font-size: 28px; font-weight: bold; margin: 30px 0 15px 0; line-height: 1.3;">')
  html = html.replace(/<h3>/g, '<h3 style="color: #032EA1; font-size: 24px; font-weight: bold; margin: 30px 0 15px 0; line-height: 1.3;">')
  html = html.replace(/<h4>/g, '<h4 style="color: #032EA1; font-size: 20px; font-weight: bold; margin: 30px 0 15px 0; line-height: 1.3;">')
  html = html.replace(/<h5>/g, '<h5 style="color: #032EA1; font-size: 18px; font-weight: bold; margin: 30px 0 15px 0; line-height: 1.3;">')
  html = html.replace(/<h6>/g, '<h6 style="color: #032EA1; font-size: 16px; font-weight: bold; margin: 30px 0 15px 0; line-height: 1.3;">')

  // Style paragraphs
  html = html.replace(/<p>/g, '<p style="color: #4b5563; font-size: 16px; line-height: 1.7; margin: 15px 0;">')

  return html
}

export default function BlogPostEmail({
  title,
  excerpt,
  date,
  slug,
  image,
  content = '',
  baseUrl = 'https://inspiredmissions.com',
}: BlogPostEmailProps) {
  const postUrl = `${baseUrl}/blog/${slug}`
  const imageUrl = image
    ? `${baseUrl}${image}`
    : `${baseUrl}/images/hero-angkor-wat.jpg`

  // Convert MDX content to HTML
  const htmlContent = content ? convertMDXToHTML(content, baseUrl) : ''

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 0; background-color: #f3f4f6;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #021e6b 0%, #032EA1 50%, #1e5dc7 100%); padding: 30px 20px; text-align: center;">
          <img src="${baseUrl}/images/logo.png" alt="Inspired Missions" width="80" height="40" style="display: block; margin: 0 auto 10px; max-width: 80px; max-height: 40px; filter: brightness(0) invert(1);" />
          <h2 style="color: white; margin: 0; font-size: 18px; font-weight: normal; letter-spacing: 1px;">INSPIRED MISSIONS</h2>
        </div>

        <!-- Content -->
        <div style="background: #ffffff; padding: 0;">
          <!-- Featured Image -->
          ${
            image
              ? `
          <div style="width: 100%; height: 300px; overflow: hidden;">
            <img src="${imageUrl}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
          </div>
          `
              : ''
          }

          <!-- Post Content -->
          <div style="padding: 40px 30px;">
            <!-- Date -->
            <p style="color: #D4AF37; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 15px 0;">
              ${new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <!-- Title -->
            <h1 style="color: #032EA1; font-size: 28px; font-weight: bold; margin: 0 0 20px 0; line-height: 1.3;">
              ${title}
            </h1>

            <!-- Full Article Content -->
            <div style="color: #4b5563; font-size: 16px; line-height: 1.7;">
              ${htmlContent || excerpt}
            </div>

            <!-- CTA Button -->
            <div style="text-align: center; margin: 40px 0;">
              <a href="${postUrl}" style="background: linear-gradient(135deg, #D4AF37 0%, #f4cf5d 100%); color: #021e6b; padding: 14px 40px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);">
                Read on Website
              </a>
            </div>
          </div>
        </div>

        <!-- Support Section -->
        <div style="background: #f9fafb; padding: 30px; border-top: 1px solid #e5e7eb;">
          <h3 style="color: #032EA1; font-size: 20px; margin: 0 0 15px 0; text-align: center;">Support Our Mission</h3>
          <p style="color: #6b7280; font-size: 14px; text-align: center; margin: 0 0 20px 0;">
            Your generosity helps us transform lives in Cambodia through God's grace
          </p>
          <div style="text-align: center;">
            <a href="https://donorbox.org/im_donations" style="background: linear-gradient(135deg, #032EA1 0%, #1e5dc7 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px; display: inline-block;">
              Donate Now
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #1f2937; color: #9ca3af; padding: 30px; text-align: center; font-size: 12px; line-height: 1.8;">
          <p style="margin: 0 0 10px 0;">
            <strong style="color: #ffffff;">Inspired Missions</strong><br>
            Transforming lives in Cambodia through God's grace
          </p>
          <p style="margin: 0 0 15px 0;">
            <a href="https://inspiredmissions.com" style="color: #D4AF37; text-decoration: none;">Visit Our Website</a> |
            <a href="https://inspiredmissions.com/blog" style="color: #D4AF37; text-decoration: none;">Read More Stories</a> |
            <a href="https://www.facebook.com/MissionsInspired" style="color: #D4AF37; text-decoration: none;">Facebook</a>
          </p>
          <p style="margin: 15px 0 0 0; padding-top: 15px; border-top: 1px solid #374151; font-size: 11px;">
            You're receiving this email because you subscribed to Inspired Missions newsletter.<br>
            <a href="{{unsubscribe_url}}" style="color: #D4AF37; text-decoration: none;">Unsubscribe</a> from these emails
          </p>
        </div>
      </body>
    </html>
  `
}

// Helper function to generate HTML email
export function generateBlogPostEmail(props: BlogPostEmailProps): string {
  return BlogPostEmail(props)
}
