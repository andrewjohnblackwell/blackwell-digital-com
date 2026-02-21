'use client'

import * as React from 'react'

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  variant: ToastVariant
  title: string
  message?: string
}

type ToastAction =
  | { type: 'ADD'; toast: Toast }
  | { type: 'REMOVE'; id: string }

function toastReducer(state: Toast[], action: ToastAction): Toast[] {
  switch (action.type) {
    case 'ADD':
      return [...state, action.toast]
    case 'REMOVE':
      return state.filter((t) => t.id !== action.id)
  }
}

let toastCount = 0

interface ToastContextValue {
  toasts: Toast[]
  addToast: (_toast: Omit<Toast, 'id'>) => string
  removeToast: (_id: string) => void
}

export const ToastContext = React.createContext<ToastContextValue | null>(null)

export function useToastState() {
  const [toasts, dispatch] = React.useReducer(toastReducer, [])

  const addToast = React.useCallback((toast: Omit<Toast, 'id'>) => {
    const id = `toast-${++toastCount}`
    dispatch({ type: 'ADD', toast: { ...toast, id } })
    return id
  }, [])

  const removeToast = React.useCallback((id: string) => {
    dispatch({ type: 'REMOVE', id })
  }, [])

  return { toasts, addToast, removeToast }
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
