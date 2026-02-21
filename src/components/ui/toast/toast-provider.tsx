'use client'

import * as React from 'react'
import { ToastContext, useToastState } from './use-toast'
import { ToastItem } from './toast'

function ToastProvider({ children }: { children: React.ReactNode }) {
  const state = useToastState()

  return (
    <ToastContext.Provider value={state}>
      {children}
      <div
        className="fixed bottom-6 right-6 z-toast flex flex-col gap-2 max-w-[420px] max-md:bottom-20 max-md:right-4 max-md:left-4 max-md:max-w-none"
        aria-label="Notifications"
      >
        {state.toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onDismiss={state.removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export { ToastProvider }
