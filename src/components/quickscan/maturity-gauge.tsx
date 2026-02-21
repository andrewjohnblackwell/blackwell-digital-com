'use client'

import type { StageNumber, StageName } from '@/lib/quickscan/types'

interface MaturityGaugeProps {
  stage: StageNumber
  stageName: StageName
  overallAverage: number
}

function MaturityGauge({ stage, stageName, overallAverage }: MaturityGaugeProps) {
  // Semi-circular arc gauge
  // Angle ranges from -90° (left, stage 1) to +90° (right, stage 4)
  const radius = 80
  const strokeWidth = 12
  const cx = 100
  const cy = 95

  // Background arc path (semicircle)
  const bgArcPath = describeArc(cx, cy, radius, -180, 0)
  // Filled arc: map overallAverage (1–4) to angle (-180 to 0)
  const fillAngle = -180 + ((overallAverage - 1) / 3) * 180
  const fillArcPath = describeArc(cx, cy, radius, -180, fillAngle)

  // Needle position
  const needleAngle = ((overallAverage - 1) / 3) * Math.PI // 0 to PI
  const needleX = cx - Math.cos(needleAngle) * (radius - 20)
  const needleY = cy - Math.sin(needleAngle) * (radius - 20)

  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 200 120"
        className="w-full max-w-[280px]"
        role="img"
        aria-label={`AI Maturity Stage ${stage} of 4: ${stageName}`}
      >
        {/* Background arc */}
        <path
          d={bgArcPath}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Filled arc */}
        <path
          d={fillArcPath}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Needle dot */}
        <circle cx={needleX} cy={needleY} r={5} fill="white" />
        {/* Stage number */}
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          className="fill-fg-primary text-3xl font-heading font-bold"
          fontSize="36"
        >
          {stage}
        </text>
        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          className="fill-fg-secondary text-xs"
          fontSize="11"
        >
          of 4
        </text>
        {/* Stage labels */}
        <text x={8} y={cy + 18} className="fill-fg-tertiary" fontSize="8">
          Manual
        </text>
        <text
          x={192}
          y={cy + 18}
          textAnchor="end"
          className="fill-fg-tertiary"
          fontSize="8"
        >
          Autonomous
        </text>
        <defs>
          <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
      <p className="text-lg font-heading font-semibold text-primary">
        {stageName} — Stage {stage} of 4
      </p>
    </div>
  )
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
): string {
  const startRad = (startAngle * Math.PI) / 180
  const endRad = (endAngle * Math.PI) / 180

  const x1 = cx + r * Math.cos(startRad)
  const y1 = cy + r * Math.sin(startRad)
  const x2 = cx + r * Math.cos(endRad)
  const y2 = cy + r * Math.sin(endRad)

  const largeArc = endAngle - startAngle > 180 ? 1 : 0

  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`
}

export { MaturityGauge }
