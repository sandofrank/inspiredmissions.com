import Link from 'next/link'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Signup */}
        <div className="mb-12">
          <NewsletterSignup />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* About */}
          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-white">Inspired Missions</h3>
            <p className="text-gray-300 text-sm md:text-xs mb-4 leading-relaxed">
              Through God's grace we long to see the transformation of Cambodia, through the building up and training of local pastors in Biblical studies.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="mailto:info@inspiredmissions.com"
                className="text-gray-300 hover:text-yellow-300 transition-colors"
                aria-label="Email Inspired Missions"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/MissionsInspired"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-300 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm md:text-xs">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about-cambodia" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm md:text-xs">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm md:text-xs">
                  History
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm md:text-xs">
                  Inspired News
                </Link>
              </li>
              <li>
                <a
                  href="https://donorbox.org/im_donations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-300 transition-colors text-sm md:text-xs"
                >
                  Donate
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-yellow-300 transition-colors text-sm md:text-xs">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Missionaries */}
          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-white">Missionaries</h3>
            <div className="text-gray-300 text-sm md:text-xs space-y-4">
              <div>
                <p className="font-semibold text-white mb-1">Curtis Johnson</p>
                <p><a href="mailto:cjohnson@inspiredmissions.com" className="hover:text-yellow-300 transition-colors">cjohnson@inspiredmissions.com</a></p>
                <p>+855 92648503 <span className="text-xs md:text-xs text-gray-400">(Cambodia)</span></p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Breann Johnson</p>
                <p><a href="mailto:brecurtisjohnson@gmail.com" className="hover:text-yellow-300 transition-colors">brecurtisjohnson@gmail.com</a></p>
                <p>+855 77962055 <span className="text-xs md:text-xs text-gray-400">(Cambodia)</span></p>
              </div>
            </div>
          </div>

          {/* USA Team */}
          <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-bold mb-4 text-white">USA Team</h3>
            <div className="text-gray-300 text-sm md:text-xs space-y-4 mb-4">
              <div>
                <p className="font-semibold text-white mb-1">Jeff Johnson</p>
                <p><a href="mailto:jjohnson@inspiredmissions.com" className="hover:text-yellow-300 transition-colors">jjohnson@inspiredmissions.com</a></p>
                <p>951-704-4853</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Christy Johnson</p>
                <p><a href="mailto:christy@inspiredmissions.com" className="hover:text-yellow-300 transition-colors">christy@inspiredmissions.com</a></p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm md:text-xs text-gray-400 uppercase tracking-wider mb-2">Mailing Address</p>
              <p className="text-gray-300 text-sm md:text-xs">
                35962 Butchart St<br />
                Wildomar, CA 92584
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm md:text-xs mb-2">
            Inspired Missions ministers in Cambodia as Inspire Cambodia under NGO Water of Life Cambodia.
          </p>
          <p className="text-gray-400 text-sm md:text-xs">
            Tax ID 81-3757343 | &copy; {new Date().getFullYear()} Inspired Missions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
