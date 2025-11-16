import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export default function Home() {
  const posts = getAllPosts().slice(0, 6)

  return (
    <div>
      {/* Hero Banner */}
      <div
        className="relative h-[600px] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-angkor-wat.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-shadow-strong">
            Transforming Lives Through God's Grace
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light text-shadow">
            Building up and training local pastors in Cambodia through Biblical studies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-primary inline-block">
              Read Our Stories
            </Link>
            <a
              href="https://donorbox.org/im_donations"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              Support Our Mission
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>


      <div className="container mx-auto px-4">
        {/* Our Purpose Section */}
        <section className="py-12 section-accent">
          <div className="text-center mb-12">
            <div className="section-heading-accent inline-block">
              <span className="font-semibold text-sm uppercase tracking-wider block mb-3" style={{color: '#D4AF37'}}>What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold">Our Purpose</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Three pillars guide our mission to transform lives in Cambodia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group hover-lift bg-white rounded-xl shadow-lg p-8 text-center border-t-4" style={{borderTopColor: '#032EA1'}}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all" style={{backgroundColor: 'rgba(3, 46, 161, 0.1)'}}>
                <svg className="w-10 h-10 transition-transform group-hover:scale-125" style={{color: '#032EA1'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Evangelize</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing the necessary tools to present the Gospel message of God's Grace and Mercy
              </p>
            </div>

            <div className="group hover-lift bg-white rounded-xl shadow-lg p-8 text-center border-t-4" style={{borderTopColor: '#D4AF37'}}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all" style={{backgroundColor: 'rgba(212, 175, 55, 0.1)'}}>
                <svg className="w-10 h-10 transition-transform group-hover:scale-125" style={{color: '#D4AF37'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Train</h3>
              <p className="text-gray-600 leading-relaxed">
                Teaching and leading local leaders to grow in their faith and become more effective leaders
              </p>
            </div>

            <div className="group hover-lift bg-white rounded-xl shadow-lg p-8 text-center border-t-4" style={{borderTopColor: '#E00025'}}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all" style={{backgroundColor: 'rgba(224, 0, 37, 0.1)'}}>
                <svg className="w-10 h-10 transition-transform group-hover:scale-125" style={{color: '#E00025'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Minister</h3>
              <p className="text-gray-600 leading-relaxed">
                Identifying and meeting spiritual and physical needs of locals in churches and communities
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Our Missionaries Section */}
      <section className="py-12 bg-gray-50 pattern-dots">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="section-heading-accent inline-block">
                <span className="font-semibold text-sm uppercase tracking-wider block mb-3" style={{color: '#D4AF37'}}>Meet Our Team</span>
                <h2 className="text-4xl md:text-5xl font-bold">Our Missionaries in Cambodia</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-6">
                Dedicated servants bringing hope and transformation to communities across Cambodia
              </p>
            </div>

            {/* Curtis and Breann */}
            <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-t-4" style={{borderTopColor: '#032EA1'}}>
              <div className="md:flex md:items-center">
                <div className="md:w-2/5 relative h-[400px] md:h-[600px]">
                  <Image
                    src="/images/curtis-breann.jpg"
                    alt="Curtis and Breann"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Curtis and Breann</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Since tying the knot in 2013, Curtis and Breann have embarked on their mission journey together, initially with Calvary Hills Church, now known as Impact Church, in Phnom Penh, Cambodia. February 2020 saw the arrival of their daughter, Harlow Grace, into their family and mission life, as she was born in Cambodia.
                  </p>
                  <div className="p-4 mb-4 rounded border-l-4" style={{backgroundColor: 'rgba(3, 46, 161, 0.05)', borderLeftColor: '#032EA1'}}>
                    <p className="text-gray-800">
                      <strong style={{color: '#032EA1'}}>Mission Statement:</strong> Our mission is fueled by God's grace, aiming for the transformation of Cambodia by supporting the growth of local churches, alongside equipping local pastors and believers with necessary resources and training.
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Curtis and Bre manage training programs for rural pastors on inductive Bible study and play a leading role in supporting a children's home that serves around 30 local children. Initiatives like Project Cow and Project Fertilizer have been introduced to aid Cambodian farmers towards self-sufficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Andy and Sam */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4" style={{borderTopColor: '#D4AF37'}}>
              <div className="md:flex md:flex-row-reverse md:items-center">
                <div className="md:w-2/5 relative h-[400px] md:h-[600px]">
                  <Image
                    src="/images/andy-sam.jpg"
                    alt="Andy and Sam"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Andy and Sam</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Since July 2011, Andy and Samantha Wagers have called Cambodia home. Originally from Galion, Ohio, what began as a short two-week mission trip has grown into more than a decade of serving God and loving people. Their family has grown through the many students and community members they have walked alongside in ministry.
                  </p>
                  <div className="p-4 mb-4 rounded border-l-4" style={{backgroundColor: 'rgba(212, 175, 55, 0.05)', borderLeftColor: '#D4AF37'}}>
                    <p className="text-gray-800">
                      <strong style={{color: '#b8941f'}}>Mission Statement:</strong> Their mission is to equip the next generation of Cambodians with faith, education, and practical skills so that lives are transformed by the hope of Jesus Christ.
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    In 2016, Samantha helped establish the Academy of Careers and Technology, the first K–12 general technical school in Cambodia. Andy has devoted his time to developing Cambodia's baseball program, using sports to teach teamwork, build community, and open doors for the gospel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      <div className="container mx-auto px-4">
        {/* Our Happenings - Featured Blog Posts */}
        <section className="py-12 section-accent">
            <div className="text-center mb-12">
              <div className="section-heading-accent inline-block">
                <span className="font-semibold text-sm uppercase tracking-wider block mb-3" style={{color: '#D4AF37'}}>Latest Updates</span>
                <h2 className="text-4xl md:text-5xl font-bold">Our Happenings</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-6">
                Stay connected with our journey and see what God is doing in Cambodia
              </p>
            </div>

            {posts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {posts.map((post) => (
                    <article key={post.slug} className="group hover-lift bg-white rounded-xl shadow-lg overflow-hidden">
                      {post.image && (
                        <Link href={`/blog/${post.slug}`}>
                          <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-all duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          </div>
                        </Link>
                      )}
                      <div className="p-6">
                        <time className="text-sm font-semibold transition-colors" style={{color: '#D4AF37'}}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <h3 className="text-xl font-bold mt-2 mb-3">
                          <Link href={`/blog/${post.slug}`} className="text-gray-900 transition-colors hover:opacity-80">
                            {post.title}
                          </Link>
                        </h3>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center font-semibold group/link transition-colors"
                          style={{color: '#032EA1'}}
                        >
                          Read more
                          <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="text-center">
                  <Link href="/blog" className="btn-primary inline-block">
                    View All Stories
                  </Link>
                </div>
              </>
            ) : null}
        </section>
      </div>
    </div>
  )
}
