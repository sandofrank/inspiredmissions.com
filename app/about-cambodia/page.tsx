import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Ministries in Cambodia",
  description: "Discover our Bible school, jungle ministry, cows for Christians program, and support for local pastors across Cambodia.",
  openGraph: {
    title: "Our Ministries in Cambodia",
    description: "Discover our Bible school, jungle ministry, cows for Christians program, and support for local pastors across Cambodia.",
    images: ['/images/about-cambodia/bibleschool3.jpg'],
  },
}

export default function AboutCambodiaPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-section hero-section-medium">
        <Image
          src="/images/about-cambodia/jm8.jpg"
          alt="Ministry in Cambodia"
          fill
          priority
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Our Ministries in Cambodia
          </h1>
          <p className="hero-subtitle">
            Discover the ministries transforming lives across Cambodia
          </p>
        </div>
      </div>

      <div className="page-container">
        {/* Cambodia Bible College */}
        <section className="content-section">
          <div className="flex items-center gap-3 mb-4 title-with-icon">
            <svg className="w-10 h-10 flex-shrink-0 icon-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="section-title mb-0">Cambodia Bible College</h2>
          </div>
          <div className="prose section-content">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <p>
                  Water of Life Bible School is a school designed to complement the Cambodian church by equipping aspiring church leaders and pastors to have a solid understanding of the Bible so they can be effective ministers in their communities.
                </p>
                <p>
                  Students have the opportunity, in the one-year certificate program, to study the Bible in-depth and grow in maturity with God. As we have seen God move since the opening of the bible school in October, we have seen a desire in the youth to pursue Bible education even if their vocation is not church related.
                </p>
              </div>
              <svg className="w-24 h-24 flex-shrink-0 icon-primary opacity-15 mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p>
              We see a need for strong Christians in the public workplace in Cambodia so we seek to equip all who desire biblical knowledge.
            </p>
          </div>
          <div className="image-grid image-grid-3">
            <div className="image-grid-item"><Image src="/images/about-cambodia/bibleschool1.jpg" alt="Bible School" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/bibleschool2.jpg" alt="Bible School" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/bibleschool3.jpg" alt="Bible School" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/bibleschool4.jpg" alt="Bible School" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/bibleschool5.jpg" alt="Bible School" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/bibleschool6.jpg" alt="Bible School" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
          </div>
        </section>
      </div>

      {/* Cambodia Children's Home */}
      <section className="section-bg-dots">
        <div className="page-container">
          <div className="flex items-center gap-3 mb-4 title-with-icon">
            <svg className="w-10 h-10 flex-shrink-0 icon-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h2 className="section-title mb-0">Cambodia Children's Home</h2>
          </div>
          <div className="image-hero">
            <Image src="/images/about-cambodia/coh.jpg" alt="Children of Hope" fill className="object-cover" sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px" />
          </div>
          <div className="prose section-content">
            <p>
              Children of Hope is a foster home with 20 amazing children and young adults. Katherine Steele is the director, also affectionately known as "Mom," of COH. She founded the home in 2010 bringing stability and hope to many young lives. The primary goal for COH is to raise children in a family environment focused on the Lord. In a similar fashion to the foster system in America, not every child placed in our care is an orphan, but every child with us is in dire need of a safe loving home. Providing for these children requires some practical and spiritual necessities of great importance.
            </p>

            <div className="relative my-8 pl-12">
              <svg className="w-10 h-10 icon-accent opacity-20 absolute left-0 top-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <ul>
                <li>Proper education from Elementary to College</li>
                <li>Medical Care</li>
                <li>Discipleship and Leadership Training</li>
                <li>In-depth Bible school classes</li>
                <li>Cooking skills</li>
                <li>Personal care and Hygiene</li>
              </ul>
            </div>
            <p>
              We've seen wonderful fruit blossom throughout the recent years in both the staff and the children. After all, this ministry is meant to further their futures and their families for the Lord in Cambodia.
            </p>
            <blockquote>
              All your children shall be taught by the LORD, and great shall be the peace of your children. -Isaiah 54:13
            </blockquote>
            <p>
              Curtis and Bre have been partnering with Children of Hope since 2014. Wearing many hats for different seasons, Curtis and Bre help provide consistency and growth through discipleship and Biblical training.
            </p>
          </div>
        </div>
      </section>

      <div className="page-container">
        {/* Cambodia Cows */}
        <section className="content-section">
          <div className="flex items-center gap-3 mb-4 title-with-icon">
            <svg className="w-10 h-10 flex-shrink-0 icon-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="section-title mb-0">Cambodia Cows</h2>
          </div>
          <div className="prose section-content">
            <p className="flex items-start gap-3">
              <svg className="w-6 h-6 icon-secondary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Cost:</strong> $650-$1000 per cow</span>
            </p>
            <p>
              The local pastors that we minister with in the rural areas are entrusted to care for each cow we purchase. They are encouraged to be a good example to the church members who will participate in "Project Cow" after them. This journey is ever changing as the price and process of obtaining and caring for each cow is always different depending on availability and circumstances. There is no such thing as a cattle store here in Cambodia, but who would have predicted raising a cow would be a new undiscovered path to discipleship and stewardship.
            </p>
            <p>
              Since there is no cattle store, local pastors have to search from farm to farm (Mom and Pop style farms) to locate a cow that will best serve their church and family. It is so incredibly encouraging to see the pastor's eagerness and willingness to search out a cow that will bless their family and church in such a big way!
            </p>
            <p>
              We will be purchasing several more cows in the coming months so stay tuned. We want to be intentional and prayerful for each cow that is purchased. We will continue to keep you all updated. Thank you again for all of those who have contributed and who will continue to support "Project Cow."
            </p>
            <p className="text-right">Curtis, Bre and Harlow Johnson</p>
          </div>
          <div className="image-grid image-grid-3">
            <div className="image-grid-item"><Image src="/images/about-cambodia/projectcow-01.jpg" alt="Project Cow" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/projectcow-02.jpg" alt="Project Cow" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/projectcow-03.jpg" alt="Project Cow" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/projectcow-04.jpg" alt="Project Cow" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/projectcow-05.jpg" alt="Project Cow" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
          </div>
        </section>
      </div>

      {/* Cambodia Fertilizer */}
      <section className="section-bg-dots">
        <div className="page-container">
          <div className="flex items-center gap-3 mb-4 title-with-icon">
            <svg className="w-10 h-10 flex-shrink-0 icon-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            <h2 className="section-title mb-0">Cambodia Fertilizer</h2>
          </div>
          <div className="image-hero">
            <Image src="/images/about-cambodia/projectfert-01.jpg" alt="Project Fertilizer" fill className="object-cover" sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px" />
          </div>
          <div className="prose section-content relative">
            <p><strong>Cost:</strong> One bag of rice fertilizer is priced at $30-$100 (price fluctuates)</p>

            <p>
              With cooperation of the church leaders in the Cambodian villages, Inspired Missions offer small farming loans for the community church members. The money is used solely for buying fertilizer for their rice fields at the proper season for planting. When the crop is yielded the farmer than can repay the loan with Zero interest. This process can be renewed every time the farmer pays back the loan. The vetting process is done in cooperation with the local church leaders in these rural farming villages.
            </p>

            <svg className="w-20 h-20 icon-primary opacity-10 float-right ml-4 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>

            <p>
              One of the vicious cycles of high interest loans for farmers who live hand to mouth is that they can never get ahead financially. Debt collectors will pressure family members to let their children leave the village and to work in the city. Therefore, human trafficking is a product of this high interest system.
            </p>
            <p>
              By providing interest free loans we believe we are making a difference in the hearts and souls of our Cambodian brothers and sisters! Thank you for your consideration and we pray that you will join us in our Project Fertilizer!
            </p>
            <p className="text-right">Curtis, Bre and Harlow Johnson</p>
          </div>
        </div>
      </section>

      <div className="page-container">
        {/* Cambodia Jungle */}
        <section className="content-section">
          <div className="flex items-center gap-3 mb-4 title-with-icon">
            <svg className="w-10 h-10 flex-shrink-0 icon-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
            </svg>
            <h2 className="section-title mb-0">Cambodia Jungle</h2>
          </div>
          <div className="prose section-content">
            <div className="flex gap-6 items-start">
              <svg className="w-20 h-20 icon-accent opacity-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
              </svg>
              <div>
                <p>
                  Curtis teams up with a fellow missionary and travels out to some remote areas in the country to minister to people and churches where the roads are practically non-existent. Curtis' primary focus on these trips are the gospel and the Word.
                </p>
                <p>
                  Many of the people being ministered to have a faint, if any, knowledge of Jesus and the gospel so spending time sharing the gospel with them is imperative. He is able to gift audio and or written Bibles, depending on their education, and conduct important spiritual conversations while forging intentional relationships.
                </p>
              </div>
            </div>
          </div>
          <div className="image-grid image-grid-3">
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm1.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm2.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm3.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm4.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm5.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm6.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm7.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm8.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/jm9.jpg" alt="Jungle Ministry" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
          </div>
        </section>
      </div>

      {/* Cambodia Support */}
      <section className="section-bg-blue">
        <div className="page-container">
          <div className="flex items-center gap-3 mb-4 title-with-icon">
            <svg className="w-10 h-10 flex-shrink-0 icon-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <h2 className="section-title mb-0">The Cost of Ministry</h2>
          </div>
          <div className="prose section-content">
            <div className="flex gap-4 items-start">
              <svg className="w-8 h-8 icon-secondary opacity-20 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <p>
                  The reality is; there are costs and needs to bringing the gospel to a third world nation. At Inspired Missions, we are very careful with how we use the gifts our donors entrust to us — because we know that every resource given to us can transform a life.
                </p>
                <p>
                  We recognize that the resources at our disposal are not our own. They are a sacred trust from God, through our donors, on behalf of spreading the gospel.
                </p>
              </div>
            </div>
            <p>
              If you would like to support a specific project, you will have the opportunity to request how your gift is to be used. As a 501C3 non profit organization we do our best to honor each request. Thank you and may God bless you and your family....
            </p>
            <p className="text-right">Curtis, Bre and Harlow Johnson</p>
          </div>

          <div className="image-grid image-grid-3">
            <div className="image-grid-item"><Image src="/images/about-cambodia/support-01.jpg" alt="Ministry Support" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/support-02.jpg" alt="Ministry Support" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/support-03.jpg" alt="Ministry Support" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/support-04.jpg" alt="Ministry Support" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
            <div className="image-grid-item"><Image src="/images/about-cambodia/support-05.jpg" alt="Ministry Support" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
          </div>

          <div className="text-center">
            <a
              href="https://donorbox.org/im_donations"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Support Our Ministry
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
