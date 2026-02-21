'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const CONSENT_KEY = 'cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    // Reload to allow analytics scripts to initialize
    window.location.reload()
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-modal p-4"
    >
      <div className="mx-auto max-w-container bg-bg-elevated border border-border rounded-xl p-5 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-fg-secondary flex-1">
          We use cookies and analytics to improve your experience. By accepting,
          you consent to the use of analytics cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="ghost" size="sm" onClick={decline}>
            Decline
          </Button>
          <Button variant="primary" size="sm" onClick={accept}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
