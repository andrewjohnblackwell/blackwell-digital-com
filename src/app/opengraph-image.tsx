import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Blackwell Digital — AI Transformation for Growth-Stage Businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #070d1a 0%, #0d1a33 50%, #0a1e2e 100%)',
          padding: '80px',
        }}
      >
        {/* Electric blue accent bar */}
        <div
          style={{
            display: 'flex',
            width: 120,
            height: 4,
            background: 'linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)',
            borderRadius: 2,
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 700,
            color: '#f0f4fa',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          Blackwell Digital
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            color: '#9cb0c8',
            marginTop: 24,
            textAlign: 'center',
            lineHeight: 1.5,
          }}
        >
          AI Transformation for Growth-Stage Businesses
        </div>
        {/* Bottom accent bar */}
        <div
          style={{
            display: 'flex',
            width: 80,
            height: 4,
            background: 'linear-gradient(90deg, #0ea5e9 0%, #22d3ee 100%)',
            borderRadius: 2,
            marginTop: 48,
          }}
        />
      </div>
    ),
    { ...size }
  )
}
