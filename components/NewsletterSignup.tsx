'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
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
        body: JSON.stringify({ firstName, lastName, email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage(data.message || 'Successfully subscribed to newsletter!')
        setFirstName('')
        setLastName('')
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
    <div className="bg-gradient-to-br from-primary to-primary-light p-4 rounded-lg shadow-md">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg font-bold text-white mb-1">Subscribe to Our Newsletter</h3>
        <p className="text-gray-100 text-sm mb-3">
          Receive inspiring stories from the field, ministry updates, prayer requests, and ways you can partner with us in transforming lives in Cambodia.
        </p>

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
            disabled={status === 'loading'}
            className="px-4 py-3 text-base rounded border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-colors disabled:opacity-50 disabled:bg-gray-100"
            aria-label="First name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
            disabled={status === 'loading'}
            className="px-4 py-3 text-base rounded border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-colors disabled:opacity-50 disabled:bg-gray-100"
            aria-label="Last name"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 text-base rounded border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-colors disabled:opacity-50 disabled:bg-gray-100"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 text-base bg-gradient-to-br from-secondary to-secondary-light text-primary-dark font-bold rounded hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>

        {message && (
          <div
            className={`p-2 rounded text-xs ${
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

        <p className="text-xs text-white/70 mt-2">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
