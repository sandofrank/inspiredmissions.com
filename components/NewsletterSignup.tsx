'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Successfully subscribed to newsletter!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="bg-gradient-to-br from-primary to-primary-light p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-2">Stay Connected</h3>
      <p className="text-gray-100 mb-4">
        Get updates on our ministry and new blog posts delivered to your inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-secondary transition-colors disabled:opacity-50"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-secondary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {message && (
          <div
            className={`p-3 rounded-lg text-sm ${
              status === 'success'
                ? 'bg-green-500/20 text-green-100 border border-green-300/30'
                : 'bg-red-500/20 text-red-100 border border-red-300/30'
            }`}
            role="alert"
          >
            {message}
          </div>
        )}
      </form>

      <p className="text-xs text-white/70 mt-3">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  )
}
