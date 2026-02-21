import type { QuickScanResult } from './types'

/**
 * In-memory token store. Async interface so swapping to Vercel KV
 * is a single-file change — just replace the implementation.
 *
 * Limitation: resets on serverless cold start. Acceptable for dev/demo.
 */

const store = new Map<string, QuickScanResult>()

export async function saveResult(result: QuickScanResult): Promise<void> {
  store.set(result.token, result)
}

export async function getResult(
  token: string
): Promise<QuickScanResult | null> {
  return store.get(token) ?? null
}
