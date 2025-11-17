import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cambodia's Journey",
  description: "From ancient glory to modern hope - learn about Cambodia's rich history and our mission to bring transformation through Christ.",
  openGraph: {
    title: "Cambodia's Journey",
    description: "From ancient glory to modern hope - learn about Cambodia's rich history and our mission to bring transformation through Christ.",
    images: ['/images/hero-angkor-wat.jpg'],
  },
}

export default function HistoryPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-section hero-section-medium">
        <Image
          src="/images/about-cambodia/bibleschool3.jpg"
          alt="Bible School in Cambodia"
          fill
          priority
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay hero-overlay-strong"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Cambodia's Journey
          </h1>
          <p className="hero-subtitle">
            Understanding the past to serve the present and build hope for the future
          </p>
        </div>
      </div>

      <div className="page-container">
          {/* Introduction */}
          <section className="content-section">
            <div className="prose section-content">
              <p className="section-intro">
                Cambodia is a nation of remarkable resilience and beauty, yet its recent history has left deep wounds that continue to affect its people today. Understanding this history is essential to understanding why the work of supporting local pastors and building up the church in Cambodia is so critical.
              </p>
            </div>
          </section>
      </div>

      {/* Ancient Glory */}
      <section className="section-bg-dots">
        <div className="page-container">
            <div className="flex items-center gap-3 mb-4 title-with-icon">
              <svg className="w-10 h-10 flex-shrink-0 icon-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h2 className="section-title mb-0">A Kingdom of Glory</h2>
            </div>
            <div className="prose section-content">

              <div className="image-hero">
                <Image
                  src="/images/stock-angkor-wat-sunset.jpg"
                  alt="Angkor Wat at Sunset - Symbol of Cambodia's Ancient Glory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                />
              </div>

              <div className="flex items-start gap-6">
                <p className="flex-1">
                  Cambodia's history stretches back over two millennia. The mighty Khmer Empire, which flourished from the 9th to 15th centuries, was one of the most powerful kingdoms in Southeast Asia. The magnificent temples of Angkor Wat stand as testament to Cambodia's golden age—a time of artistic achievement, architectural mastery, and cultural sophistication.
                </p>
                <svg className="w-16 h-16 icon-secondary opacity-10 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div className="image-grid image-grid-3">
                <div className="image-grid-item">
                  <Image src="/images/stock-temple-structure.jpg" alt="Ancient Khmer Temple Architecture" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="image-grid-item">
                  <Image src="/images/stock-temple-pathway.jpg" alt="Temple Pathway Through History" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="image-grid-item">
                  <Image src="/images/stock-ta-prohm-temple.jpg" alt="Ta Prohm Temple Ruins" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </div>
              <div className="relative pl-8">
                <svg className="w-10 h-10 icon-accent opacity-15 absolute left-0 top-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <p>
                  For centuries, Cambodia was a predominantly Buddhist nation, with Theravada Buddhism shaping its culture, values, and way of life. The sangha (Buddhist monastic community) played a central role in education, moral guidance, and social welfare.
                </p>
              </div>
            </div>
        </div>
      </section>

      <div className="page-container">
          {/* Colonial Period */}
          <section className="content-section">
            <div className="flex items-center gap-3 mb-4 title-with-icon">
              <svg className="w-10 h-10 flex-shrink-0 icon-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <h2 className="section-title mb-0">Colonial Rule and Independence</h2>
            </div>
            <div className="prose section-content">
              <p>
                From 1863 to 1953, Cambodia was under French colonial rule as part of French Indochina. While this period brought some modernization, it also disrupted traditional structures and created economic dependencies. Cambodia gained independence in 1953 under King Norodom Sihanouk, who worked to maintain neutrality during the escalating Vietnam War.
              </p>
              <p>
                However, Cambodia's strategic location made neutrality increasingly difficult. The country was drawn into the broader conflict, with Vietnamese communist forces using Cambodian territory for supply routes (the Ho Chi Minh Trail), and the United States conducting secret bombing campaigns.
              </p>
            </div>
          </section>
      </div>

      {/* The Khmer Rouge */}
      <section className="section-bg-red">
        <div className="page-container">
            <div className="flex items-center gap-3 mb-4 title-with-icon">
              <svg className="w-10 h-10 flex-shrink-0 icon-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="section-title mb-0">The Khmer Rouge Genocide (1975-1979)</h2>
            </div>
            <div className="prose section-content">
              <p>
                In 1975, the radical communist Khmer Rouge, led by Pol Pot, seized power. What followed was one of the darkest chapters in modern history—a genocidal regime that would claim the lives of approximately 1.7 to 2 million Cambodians out of a population of about 8 million.
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-4">The Killing Fields</h3>
              <p>
                The Khmer Rouge sought to create an agrarian utopia by forcibly emptying cities and establishing agricultural collectives. In their attempt to build a "pure" communist society, they:
              </p>
              <ul>
                <li><strong>Evacuated cities:</strong> Within days of taking power, they forced the entire urban population into the countryside at gunpoint</li>
                <li><strong>Abolished money, religion, and education:</strong> Schools, hospitals, and temples were closed or destroyed</li>
                <li><strong>Separated families:</strong> Children were taken from parents and placed in labor camps</li>
                <li><strong>Targeted intellectuals:</strong> Anyone with education, including teachers, doctors, engineers, and Buddhist monks, was systematically murdered</li>
                <li><strong>Destroyed religious institutions:</strong> Over 90% of Buddhist monks were killed, and nearly all temples were desecrated or destroyed</li>
              </ul>

              <p>
                The regime's paranoia led to constant purges. People were executed for speaking a foreign language, wearing glasses (seen as a sign of education), showing emotion for lost family members, or simply being educated. The infamous "killing fields" became mass graves where hundreds of thousands were executed.
              </p>

              <blockquote>
                "To spare you is no profit, to destroy you is no loss." — Common Khmer Rouge saying
              </blockquote>
            </div>
        </div>
      </section>

      <div className="page-container">
          {/* Aftermath */}
          <section className="content-section">
            <div className="flex items-center gap-3 mb-4 title-with-icon">
              <svg className="w-10 h-10 flex-shrink-0 icon-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h2 className="section-title mb-0">The Long Road to Recovery</h2>
            </div>
            <div className="prose section-content">
              <p>
                The Khmer Rouge regime ended in 1979 when Vietnamese forces invaded Cambodia. However, the aftermath left a nation devastated:
              </p>

              <h3 className="text-2xl font-bold mt-6 mb-4">The Human Cost</h3>
              <ul>
                <li><strong>Mass death:</strong> Nearly one-quarter of the population had been killed through execution, starvation, overwork, and disease</li>
                <li><strong>Lost generation:</strong> An entire generation of educators, doctors, engineers, and religious leaders had been wiped out</li>
                <li><strong>Traumatized survivors:</strong> Those who survived carried deep psychological wounds and had witnessed unspeakable horrors</li>
                <li><strong>Destroyed families:</strong> Countless families were torn apart, with children orphaned and communities shattered</li>
              </ul>

              <h3 className="text-2xl font-bold mt-6 mb-4">The Spiritual Void</h3>
              <p>
                The systematic destruction of Cambodia's religious institutions left a profound spiritual vacuum:
              </p>
              <ul>
                <li>Over 90% of Buddhist monks had been killed</li>
                <li>Nearly all temples were destroyed or severely damaged</li>
                <li>Religious texts and artifacts were systematically destroyed</li>
                <li>Traditional moral and spiritual guidance systems were eliminated</li>
                <li>An entire generation grew up without religious or moral education</li>
              </ul>
            </div>
          </section>
      </div>

      {/* Modern Challenges */}
      <section className="section-bg-dots">
        <div className="page-container">
            <div className="flex items-center gap-3 mb-4 title-with-icon">
              <svg className="w-10 h-10 flex-shrink-0 icon-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="section-title mb-0">Cambodia Today: Ongoing Challenges</h2>
            </div>
            <div className="prose section-content">
              <h3 className="text-2xl font-bold mt-6 mb-4">Generational Trauma</h3>
              <p>
                The effects of the genocide continue to reverberate through Cambodian society today:
              </p>
              <ul>
                <li><strong>Post-traumatic stress:</strong> Survivors and their children struggle with trauma, depression, and anxiety</li>
                <li><strong>Broken trust:</strong> The regime's encouragement of betrayal and suspicion damaged social cohesion</li>
                <li><strong>Loss of tradition:</strong> Many cultural and religious practices were lost and have been difficult to restore</li>
                <li><strong>Educational gaps:</strong> The killing of educators created a knowledge vacuum that persists</li>
              </ul>

              <div className="flex items-start gap-4 mt-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mt-6 mb-4">Economic Hardship</h3>
                  <p>
                    Despite recent economic growth, Cambodia remains one of the poorest countries in Asia:
                  </p>
                </div>
                <svg className="w-16 h-16 icon-secondary opacity-12 flex-shrink-0 mt-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="image-grid image-grid-2">
                <div className="image-grid-item">
                  <Image src="/images/stock-cambodia-market.jpg" alt="Daily Life in Cambodian Markets" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="image-grid-item">
                  <Image src="/images/stock-cambodia-countryside.jpg" alt="Rural Cambodia Countryside" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>

              <div className="relative pl-10">
                <svg className="w-8 h-8 icon-accent opacity-20 absolute left-0 top-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <ul>
                  <li>Many families live on less than $2 per day</li>
                  <li>Rural areas lack basic infrastructure and services</li>
                  <li>Access to quality education and healthcare is limited</li>
                  <li>Farmers struggle with high-interest loans and poverty cycles</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-6 mb-4">Spiritual Challenges</h3>
              <ul>
                <li><strong>Religious confusion:</strong> Mix of Buddhism, animism, and materialism with little solid spiritual foundation</li>
                <li><strong>Lack of moral framework:</strong> Generations grew up without spiritual or ethical education</li>
                <li><strong>Hopelessness:</strong> Many struggle to find meaning and purpose after such profound loss</li>
                <li><strong>Limited Christian presence:</strong> Christianity is relatively new to most Cambodians, and believers often face opposition</li>
              </ul>
            </div>
        </div>
      </section>

      {/* Why Pastoral Support Matters */}
      <section className="section-bg-blue">
        <div className="page-container">
            <div className="flex items-center gap-3 mb-4 title-with-icon">
              <svg className="w-10 h-10 flex-shrink-0 icon-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h2 className="section-title mb-0">Why Supporting Pastors Matters</h2>
            </div>
            <div className="prose section-content">
            <p className="section-intro text-primary-blue">
              In this context of trauma, poverty, and spiritual hunger, the role of local pastors becomes critically important.
            </p>

            <div className="image-grid image-grid-3">
              <div className="image-grid-item">
                <Image src="/images/about-cambodia/bibleschool2.jpg" alt="Bible School Training" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="image-grid-item">
                <Image src="/images/about-cambodia/bibleschool4.jpg" alt="Pastor Training" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="image-grid-item">
                <Image src="/images/about-cambodia/bibleschool5.jpg" alt="Biblical Education" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Addressing Deep Spiritual Needs</h3>
            <p>
              Cambodia's people are searching for hope, healing, and meaning after decades of suffering. Local pastors provide:
            </p>
            <ul>
              <li><strong>The Gospel message:</strong> The hope of redemption, forgiveness, and new life in Christ speaks powerfully to a traumatized nation</li>
              <li><strong>Biblical truth:</strong> Solid teaching provides a moral and spiritual foundation that was systematically destroyed</li>
              <li><strong>Community:</strong> The church offers genuine fellowship and family for those whose families were torn apart</li>
              <li><strong>Healing:</strong> God's grace brings healing to deep wounds that still affect individuals and communities</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Cultural Understanding</h3>
            <p>
              Local Cambodian pastors have unique advantages:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="info-box info-box-secondary">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1 icon-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cultural Context</h4>
                    <p className="text-sm text-gray-600">Understanding language, customs, and traditions to communicate effectively</p>
                  </div>
                </div>
              </div>
              <div className="info-box info-box-secondary">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1 icon-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Shared Experience</h4>
                    <p className="text-sm text-gray-600">Having experienced similar traumas, they minister with deep empathy and understanding</p>
                  </div>
                </div>
              </div>
              <div className="info-box info-box-secondary">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1 icon-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Extended Reach</h4>
                    <p className="text-sm text-gray-600">Accessing remote areas and communities that foreign missionaries cannot reach</p>
                  </div>
                </div>
              </div>
              <div className="info-box info-box-secondary">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1 icon-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sustainable Growth</h4>
                    <p className="text-sm text-gray-600">Building indigenous churches that continue to grow and multiply</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">The Challenge: Limited Resources</h3>
            <p>
              However, these faithful pastors face significant challenges:
            </p>
            <ul>
              <li><strong>Lack of training:</strong> Few have access to quality biblical education</li>
              <li><strong>Poverty:</strong> Many struggle to support their families while serving rural churches</li>
              <li><strong>Isolation:</strong> Rural pastors often work alone without fellowship or support</li>
              <li><strong>Limited resources:</strong> They lack basic ministry tools like Bibles, study materials, and teaching aids</li>
              <li><strong>Cultural opposition:</strong> They may face resistance from Buddhist families or animistic communities</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">How Training and Support Helps</h3>
            <p>
              Supporting local pastors through biblical training and practical assistance helps them:
            </p>
            <ul>
              <li><strong>Teach accurately:</strong> Solid biblical knowledge enables them to teach God's Word faithfully</li>
              <li><strong>Disciple effectively:</strong> Training equips them to raise up new believers and future leaders</li>
              <li><strong>Minister holistically:</strong> They learn to address both spiritual and practical needs in their communities</li>
              <li><strong>Sustain ministry:</strong> Financial and resource support allows them to continue serving without constant economic pressure</li>
              <li><strong>Multiply impact:</strong> Well-trained pastors can train others, creating a multiplication effect</li>
            </ul>
            </div>
        </div>
      </section>

      <div className="page-container">
          {/* Hope for the Future */}
          <section className="content-section">
            <div className="flex items-center gap-3 mb-4 title-with-icon">
              <svg className="w-10 h-10 flex-shrink-0 icon-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h2 className="section-title mb-0">A Message of Hope</h2>
            </div>
            <div className="prose section-content">
              <div className="image-grid image-grid-2">
                <div className="image-grid-item">
                  <Image src="/images/about-cambodia/coh.jpg" alt="Children of Hope - New Generation" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute bottom-0 left-0 right-0 gradient-overlay-dark p-4">
                    <p className="text-white text-sm font-semibold">Children of Hope - The Next Generation</p>
                  </div>
                </div>
                <div className="image-grid-item">
                  <Image src="/images/about-cambodia/jm5.jpg" alt="Ministry in Rural Cambodia" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute bottom-0 left-0 right-0 gradient-overlay-dark p-4">
                    <p className="text-white text-sm font-semibold">Reaching Remote Communities</p>
                  </div>
                </div>
              </div>

              <div className="image-hero">
                <Image
                  src="/images/stock-temple-sunlight.jpg"
                  alt="Light Breaking Through - Hope for Cambodia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                />
              </div>

              <div className="flex gap-4">
                <svg className="w-12 h-12 icon-secondary opacity-15 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <div className="flex-1">
                  <p>
                    Despite Cambodia's painful history, there is tremendous hope:
                  </p>
                  <ul>
                    <li><strong>Growing church:</strong> Christianity is one of the fastest-growing religions in Cambodia</li>
                    <li><strong>Hunger for truth:</strong> Many Cambodians are searching for spiritual answers and meaning</li>
                    <li><strong>Young population:</strong> Over 60% of Cambodians are under 30, representing a new generation ready for transformation</li>
                    <li><strong>Faithful servants:</strong> Dedicated local pastors are willing to sacrifice to bring hope to their communities</li>
                    <li><strong>God's power:</strong> The same God who raised Christ from the dead can bring life and restoration to Cambodia</li>
                  </ul>
                </div>
              </div>

              <blockquote>
                "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners, to proclaim the year of the LORD's favor and the day of vengeance of our God, to comfort all who mourn, and provide for those who grieve in Zion—to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair."
                <br />— Isaiah 61:1-3
              </blockquote>

              <p className="section-intro text-primary-blue">
                This is why we invest in Cambodian pastors. This is why your support matters. Through equipping local leaders with biblical training, practical resources, and ongoing support, we participate in God's work of bringing beauty from ashes—transforming a nation devastated by genocide into a people filled with hope, purpose, and the knowledge of Jesus Christ.
              </p>
            </div>
          </section>
      </div>

      {/* Call to Action */}
      <section className="section-bg-dots text-center">
        <div className="page-container">
            <div className="section-content">
              <h2 className="section-title">Join Us in This Important Work</h2>
              <p className="section-intro mb-6">
                Your partnership helps equip Cambodian pastors to bring hope, healing, and the transforming power of the Gospel to their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about-cambodia" className="btn-primary inline-block">
                  Learn About Our Ministries
                </Link>
                <a
                  href="https://donorbox.org/im_donations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block"
                >
                  Support This Mission
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* Sources Note */}
      <div className="page-container">
          <section className="content-section">
            <div className="section-content">
              <div className="info-box info-box-primary">
                <h3 className="text-base font-semibold text-gray-800 mb-2">Historical Note</h3>
                <p className="text-sm text-gray-600">
                  The historical information presented here is drawn from widely documented accounts of Cambodia's history, including the work of scholars, survivors' testimonies, and human rights organizations. The estimates of deaths during the Khmer Rouge regime vary, but most historians agree that between 1.7 and 2 million people died—approximately 21-24% of Cambodia's population at the time.
                </p>
              </div>
            </div>
          </section>
      </div>
    </div>
  )
}
