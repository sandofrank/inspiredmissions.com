'use client'

import { useState, useEffect } from 'react'

interface Post {
  slug: string
  title: string
  date: string
  excerpt?: string
  image?: string
}

interface NewsletterAdminProps {
  posts: Post[]
}

export default function NewsletterAdmin({ posts }: NewsletterAdminProps) {
  const [selectedSlug, setSelectedSlug] = useState(posts.length > 0 ? posts[0].slug : '')
  const [apiKey, setApiKey] = useState('')
  const [rememberKey, setRememberKey] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [testMode, setTestMode] = useState(true)
  const [testEmail, setTestEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [result, setResult] = useState<any>(null)

  // Load saved API key and email on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('newsletter_api_key')
    const savedEmail = localStorage.getItem('newsletter_test_email')
    if (savedKey) {
      setApiKey(savedKey.trim())
      setRememberKey(true)
    }
    if (savedEmail) {
      setTestEmail(savedEmail.trim())
    }
  }, [])

  // Save/remove API key when checkbox changes
  const handleRememberKeyChange = (checked: boolean) => {
    setRememberKey(checked)
    if (checked && apiKey) {
      localStorage.setItem('newsletter_api_key', apiKey)
    } else {
      localStorage.removeItem('newsletter_api_key')
    }
  }

  // Save API key when it changes (if remember is checked)
  const handleApiKeyChange = (value: string) => {
    const trimmedValue = value.trim()
    setApiKey(trimmedValue)
    if (rememberKey) {
      localStorage.setItem('newsletter_api_key', trimmedValue)
    }
  }

  // Save test email when it changes
  const handleTestEmailChange = (value: string) => {
    setTestEmail(value)
    localStorage.setItem('newsletter_test_email', value)
  }

  const handleSendNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    setResult(null)

    try {
      const endpoint = testMode ? '/api/newsletter/test' : '/api/newsletter/send'
      const body = testMode
        ? { slug: selectedSlug, apiKey: apiKey, testEmail: testEmail }
        : { slug: selectedSlug, apiKey: apiKey }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(testMode ? 'Test email sent successfully!' : 'Newsletter sent successfully!')
        setResult(data)
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to send newsletter')
      }
    } catch (error) {
      setStatus('error')
      setMessage('An error occurred while sending the newsletter')
    }
  }

  const selectedPost = posts.find((p) => p.slug === selectedSlug)

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Newsletter Admin</h1>
      <p className="text-gray-600 mb-8">
        Send blog post newsletters to your subscribers
      </p>

      <form onSubmit={handleSendNewsletter} className="space-y-6">
        {/* API Key */}
        <div>
          <label htmlFor="apiKey" className="block text-sm font-semibold text-gray-700 mb-2">
            API Key
          </label>
          <div className="relative">
            <input
              id="apiKey"
              type={showApiKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => handleApiKeyChange(e.target.value)}
              placeholder="Enter your newsletter API key"
              required
              className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowApiKey(!showApiKey)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label={showApiKey ? "Hide API key" : "Show API key"}
            >
              {showApiKey ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="rememberKey"
              checked={rememberKey}
              onChange={(e) => handleRememberKeyChange(e.target.checked)}
              className="w-4 h-4 text-primary focus:ring-2 focus:ring-primary"
            />
            <label htmlFor="rememberKey" className="text-xs text-gray-600 cursor-pointer">
              Remember API key in browser
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Set in .env.local as NEWSLETTER_API_KEY
          </p>
        </div>

        {/* Test Mode Toggle */}
        <div className="flex items-center gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
          <input
            type="checkbox"
            id="testMode"
            checked={testMode}
            onChange={(e) => setTestMode(e.target.checked)}
            className="w-5 h-5 text-primary focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="testMode" className="text-sm font-semibold text-gray-900 cursor-pointer">
            Test Mode (send to one email only)
          </label>
        </div>

        {/* Test Email Field (only shown in test mode) */}
        {testMode && (
          <div>
            <label htmlFor="testEmail" className="block text-sm font-semibold text-gray-700 mb-2">
              Test Email Address
            </label>
            <input
              id="testEmail"
              type="email"
              value={testEmail}
              onChange={(e) => handleTestEmailChange(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
            <p className="text-xs text-gray-500 mt-1">
              Newsletter will only be sent to this address
            </p>
          </div>
        )}

        {/* Blog Post Selection */}
        <div>
          <label htmlFor="blogPost" className="block text-sm font-semibold text-gray-700 mb-2">
            Select Blog Post
          </label>
          <select
            id="blogPost"
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary transition-colors"
            required
          >
            {posts.map((post) => (
              <option key={post.slug} value={post.slug}>
                {post.title} ({new Date(post.date).toLocaleDateString()})
              </option>
            ))}
          </select>
        </div>

        {/* Preview */}
        {selectedPost && (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Email Preview</h3>
            <div className="space-y-2">
              <div>
                <span className="text-xs font-semibold text-gray-500">Title:</span>
                <p className="text-gray-900 font-medium">{selectedPost.title}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-500">Date:</span>
                <p className="text-gray-600">
                  {new Date(selectedPost.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              {selectedPost.excerpt && (
                <div>
                  <span className="text-xs font-semibold text-gray-500">Description:</span>
                  <p className="text-gray-600 text-sm">{selectedPost.excerpt}</p>
                  <p className="text-xs text-blue-600 mt-1 italic">Note: The email will include the full article content with all galleries and images</p>
                </div>
              )}
              {selectedPost.image && (
                <div>
                  <span className="text-xs font-semibold text-gray-500">Image:</span>
                  <p className="text-gray-600 text-sm">{selectedPost.image}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Send Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-center"
        >
          {status === 'loading'
            ? (testMode ? 'Sending Test...' : 'Sending Newsletter...')
            : (testMode ? 'Send Test Email' : 'Send to All Subscribers')}
        </button>

        {/* Status Messages */}
        {message && (
          <div
            className={`p-4 rounded-lg ${
              status === 'success'
                ? 'bg-green-50 text-green-800 border-2 border-green-200'
                : 'bg-red-50 text-red-800 border-2 border-red-200'
            }`}
            role="alert"
          >
            <p className="font-semibold mb-1">{message}</p>
            {result && (
              <div className="text-sm mt-2 space-y-1">
                <p>Post: {result.postTitle}</p>
                {result.sentTo && <p>Sent to: {result.sentTo}</p>}
                {result.totalRecipients && <p>Total Recipients: {result.totalRecipients}</p>}
                {result.successCount && <p>Successful: {result.successCount}</p>}
                {result.errorCount > 0 && <p className="text-red-600">Errors: {result.errorCount}</p>}
              </div>
            )}
          </div>
        )}
      </form>

      {/* Instructions */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Setup Instructions</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
          <li>
            Sign up for a free account at{' '}
            <a
              href="https://resend.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              resend.com
            </a>
          </li>
          <li>Verify your sending domain (inspiredmissions.com) in Resend dashboard</li>
          <li>Create an API key in Resend dashboard</li>
          <li>Add to .env.local: RESEND_API_KEY=re_your_key_here</li>
          <li>Create an audience in Resend and add RESEND_AUDIENCE_ID to .env.local</li>
          <li>Generate a random API key for this admin interface and add NEWSLETTER_API_KEY to .env.local</li>
        </ol>
      </div>
    </div>
  )
}
