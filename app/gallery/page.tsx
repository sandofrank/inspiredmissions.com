import Image from 'next/image'
import { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse hundreds of photos from our ministries in Cambodia including Bible school, jungle ministry, Project Cow, mission teams, and daily life in Cambodia.",
  openGraph: {
    title: "Photo Gallery",
    description: "Browse hundreds of photos from our ministries in Cambodia including Bible school, jungle ministry, Project Cow, mission teams, and daily life in Cambodia.",
    images: ['/images/about-cambodia/bibleschool3.jpg'],
  },
}

export default function GalleryPage() {
  // All images in one massive array
  const allImages = [
    // Missionaries
    '/images/curtis-breann.jpg',
    '/images/andy-sam.jpg',

    // Bible School & Graduations
    '/images/about-cambodia/bibleschool1.jpg',
    '/images/about-cambodia/bibleschool2.jpg',
    '/images/about-cambodia/bibleschool3.jpg',
    '/images/about-cambodia/bibleschool4.jpg',
    '/images/about-cambodia/bibleschool5.jpg',
    '/images/about-cambodia/bibleschool6.jpg',
    '/images/blog/bible-school-graduation.jpg',
    '/images/blog/bible-school-graduation-1.jpg',
    '/images/blog/bible-school-graduation-2.jpg',
    '/images/blog/bible-school-graduation-3.jpg',
    '/images/blog/bible-school-graduation-4.jpg',
    '/images/blog/bible-school-graduation-5.jpg',
    '/images/blog/bible-school-graduation-6.jpg',
    '/images/blog/bible-school-phnom-penh-cambodia.png',
    '/images/blog/bible-school-phnom-penh-cambodia-1.png',
    '/images/blog/bible-school-phnom-penh-cambodia-2.png',
    '/images/blog/continued-excitement-about-ibs.jpg',
    '/images/blog/continued-excitement-about-ibs-2.jpg',
    '/images/blog/what-exactly-is-inductive-bible-study.jpg',

    // Jungle Ministry & Remote Outreach
    '/images/about-cambodia/jm1.jpg',
    '/images/about-cambodia/jm2.jpg',
    '/images/about-cambodia/jm3.jpg',
    '/images/about-cambodia/jm4.jpg',
    '/images/about-cambodia/jm5.jpg',
    '/images/about-cambodia/jm6.jpg',
    '/images/about-cambodia/jm7.jpg',
    '/images/about-cambodia/jm8.jpg',
    '/images/about-cambodia/jm9.jpg',
    '/images/blog/project-jungle.jpg',
    '/images/blog/project-jungle-1.jpg',
    '/images/blog/project-jungle-2.jpg',
    '/images/blog/jungle-outreach-a-ministry-update-from-phnom-chi.jpg',
    '/images/blog/jungle-outreach-a-ministry-update-from-phnom-chi-1.jpg',
    '/images/blog/jungle-outreach-a-ministry-update-from-phnom-chi-2.jpg',
    '/images/blog/jungle-outreach-a-ministry-update-from-phnom-chi-3.jpg',
    '/images/blog/jungle-outreach-a-ministry-update-from-phnom-chi-4.png',
    '/images/blog/jungle-outreach-a-ministry-update-from-phnom-chi-5.jpg',
    '/images/blog/mud-bugs-and-jesus.jpeg',
    '/images/blog/mud-bugs-and-jesus-1.jpg',
    '/images/blog/mud-bugs-and-jesus-2.jpg',
    '/images/blog/mud-bugs-and-jesus-3.jpg',
    '/images/blog/mud-bugs-and-jesus-4.jpg',
    '/images/blog/mud-bugs-and-jesus-5.jpg',
    '/images/blog/mud-bugs-and-jesus-6.jpg',
    '/images/blog/mud-bugs-and-jesus-7.jpg',
    '/images/blog/mud-bugs-and-jesus-8.jpg',
    '/images/blog/mud-bugs-and-jesus-9.jpg',
    '/images/blog/mud-bugs-and-jesus-10.jpg',
    '/images/blog/mud-bugs-and-jesus-11.jpg',
    '/images/blog/mud-bugs-and-jesus-12.jpg',
    '/images/blog/mud-bugs-and-jesus-13.jpg',
    '/images/blog/mud-bugs-and-jesus-14.jpg',
    '/images/blog/two-by-two.jpg',
    '/images/blog/two-by-two-1.jpg',
    '/images/blog/two-by-two-2.jpg',
    '/images/blog/two-by-two-3.jpg',
    '/images/blog/two-by-two-4.jpg',
    '/images/blog/two-by-two-5.jpg',
    '/images/blog/two-by-two-6.jpg',
    '/images/blog/two-by-two-7.jpg',
    '/images/blog/two-by-two-8.jpg',
    '/images/blog/two-by-two-9.jpg',
    '/images/blog/two-by-two-10.jpg',
    '/images/blog/two-by-two-11.jpg',

    // Project Cow
    '/images/about-cambodia/projectcow-01.jpg',
    '/images/about-cambodia/projectcow-02.jpg',
    '/images/about-cambodia/projectcow-03.jpg',
    '/images/about-cambodia/projectcow-04.jpg',
    '/images/about-cambodia/projectcow-05.jpg',
    '/images/blog/holy-cows.jpg',
    '/images/blog/holy-cows-3.jpg',
    '/images/blog/holy-cows-4.jpg',
    '/images/blog/holy-cows-5.jpg',
    '/images/blog/project-cow-success-may-2022.jpeg',
    '/images/blog/project-cow-success-may-2022-2.jpg',
    '/images/blog/project-cow-success-may-2022-4.jpg',

    // Children's Home
    '/images/about-cambodia/coh.jpg',

    // Ministry Support
    '/images/about-cambodia/support-01.jpg',
    '/images/about-cambodia/support-02.jpg',
    '/images/about-cambodia/support-03.jpg',
    '/images/about-cambodia/support-04.jpg',
    '/images/about-cambodia/support-05.jpg',

    // Project Fertilizer
    '/images/about-cambodia/projectfert-01.jpg',

    // Mission Teams & Visitors
    '/images/blog/impact-mission-team-in-cambodia-update-3.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-2.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-3.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-4.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-5.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-6.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-7.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-8.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-9.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-10.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-11.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-12.jpg',
    '/images/blog/impact-mission-team-in-cambodia-update-3-13.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-1.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-1-2.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-1-3.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-1-4.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-1-5.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-1-6.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-1-7.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2-2.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2-3.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2-4.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2-5.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2-6.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2-7.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2-8.jpg',
    '/images/blog/impact-missions-team-in-cambodia-update-2-9.jpg',
    '/images/blog/covered-from-head-to-toe.jpg',
    '/images/blog/covered-from-head-to-toe-1.jpg',
    '/images/blog/covered-from-head-to-toe-2.jpg',
    '/images/blog/covered-from-head-to-toe-3.jpg',
    '/images/blog/covered-from-head-to-toe-4.jpg',
    '/images/blog/covered-from-head-to-toe-5.jpg',
    '/images/blog/covered-from-head-to-toe-7.jpg',
    '/images/blog/covered-from-head-to-toe-8.jpg',
    '/images/blog/covered-from-head-to-toe-9.jpg',
    '/images/blog/covered-from-head-to-toe-10.jpg',
    '/images/blog/covered-from-head-to-toe-11.jpg',
    '/images/blog/covered-from-head-to-toe-12.jpg',
    '/images/blog/covered-from-head-to-toe-13.jpg',
    '/images/blog/covered-from-head-to-toe-14.jpg',

    // Community Life & Relationships
    '/images/blog/building-relationships.jpg',
    '/images/blog/building-relationships-2.jpeg',
    '/images/blog/building-relationships-3.jpeg',
    '/images/blog/its-about-caring-for-the-people.jpg',
    '/images/blog/its-about-caring-for-the-people-1.jpeg',
    '/images/blog/its-about-caring-for-the-people-2.jpeg',
    '/images/blog/gods-mission-driven-love.jpg',
    '/images/blog/gods-mission-driven-love-1.jpeg',
    '/images/blog/do-we-love-living-in-cambodia.jpg',
    '/images/blog/do-we-love-living-in-cambodia-2.jpg',
    '/images/blog/do-we-love-living-in-cambodia-3.jpg',
    '/images/blog/do-we-love-living-in-cambodia-4.jpg',
    '/images/blog/do-we-love-living-in-cambodia-5.jpg',
    '/images/blog/do-we-love-living-in-cambodia-6.jpg',
    '/images/blog/jamming-in-khmer.jpg',
    '/images/blog/jamming-in-khmer-2.jpeg',
    '/images/blog/jamming-in-khmer-3.jpeg',
    '/images/blog/a-radical-change-of-plans-in-svey-reang.jpg',
    '/images/blog/a-radical-change-of-plans-in-svey-reang-1.jpeg',
    '/images/blog/october-svay-rieng-ministry-1.jpeg',
    '/images/blog/the-harvest-is-ripe.jpg',

    // Special Events & Celebrations
    '/images/blog/happy-new-year-2025.jpeg',
    '/images/blog/happy-new-year-2025-1.jpg',
    '/images/blog/happy-new-year-2025-2.jpg',
    '/images/blog/happy-new-year-2025-3.jpg',
    '/images/blog/happy-new-year-2025-4.jpg',
    '/images/blog/happy-new-year-2025-5.jpg',
    '/images/blog/happy-new-year-2025-6.jpg',
    '/images/blog/happy-new-year-2025-7.jpg',
    '/images/blog/happynewyear-2.jpg',
    '/images/blog/happynewyear-3.jpg',
    '/images/blog/happynewyear-4.jpg',
    '/images/blog/happynewyear-5.jpg',
    '/images/blog/happynewyear-6.jpg',
    '/images/blog/happynewyear-7.jpg',
    '/images/blog/happynewyear-8.jpg',
    '/images/blog/happynewyear-9.jpg',
    '/images/blog/baby-sprinkle.jpg',
    '/images/blog/baby-sprinkle-1.jpg',
    '/images/blog/and-theyre-off.jpeg',
    '/images/blog/and-theyre-off-1.jpg',
    '/images/blog/and-theyre-off-2.jpg',
    '/images/blog/and-theyre-off-3.jpg',
    '/images/blog/and-theyre-off-4.jpg',
    '/images/blog/and-theyre-off-5.jpg',
    '/images/blog/and-theyre-off-6.jpg',

    // Ministry Needs & Prayer Requests
    '/images/blog/inspire-cambodia-immediate-need-1.jpg',
    '/images/blog/inspire-cambodia-immediate-need-2.jpg',
    '/images/blog/cambodia-wish-list.jpg',
    '/images/blog/prayer-update-101118.png',
    '/images/blog/prayer-update-101118-1.png',
    '/images/blog/prayer-update-101118-2.png',
    '/images/blog/school-of-ministry-prayers-needed.jpg',
    '/images/blog/warincambodia.jpg',
    '/images/blog/warincambodia-2.jpg',
    '/images/blog/warincambodia-3.jpg',
    '/images/blog/warincambodia-4.jpg',
    '/images/blog/warincambodia-5.jpg',

    // Cambodia Temples & Culture
    '/images/hero-angkor-wat.jpg',
    '/images/stock-angkor-wat-sunset.jpg',
    '/images/stock-ta-prohm-temple.jpg',
    '/images/stock-temple-ruins.jpg',
    '/images/stock-temple-structure.jpg',
    '/images/stock-temple-sunlight.jpg',
    '/images/stock-temple-pathway.jpg',
    '/images/stock-cambodia-market.jpg',
    '/images/stock-cambodia-countryside.jpg',
  ]

  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-section hero-section-medium">
        <Image
          src="/images/about-cambodia/bibleschool3.jpg"
          alt="Photo Gallery"
          fill
          priority
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Photo Gallery
          </h1>
          <p className="hero-subtitle">
            Photos from our ministries and life in Cambodia
          </p>
        </div>
      </div>

      <div className="page-container">
        <section className="content-section">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              These photos tell the story of our ministry in Cambodia—from Bible school graduations and jungle outreach trips to everyday life with the Cambodian people we serve. You'll see mission teams visiting from partnering churches, Project Cow helping local pastors achieve sustainability, and special celebrations with our Cambodian family.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each image captures moments of transformation: students learning God's Word, remote villages receiving the Gospel for the first time, children finding hope at the Children's Home, and communities breaking free from poverty through farming initiatives. These are the faces and places where God is at work in Cambodia. Click any photo to view it larger.
            </p>
          </div>
          <Gallery images={allImages} columns={8} />
        </section>
      </div>
    </div>
  )
}
