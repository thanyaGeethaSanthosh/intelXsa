import { useId } from 'react'
import { theme } from '../config/theme'

export default function BrandLogo({ width = 150 }) {
  const gradientId = useId().replace(/:/g, '')
  const height = width * (160 / 600)

  return (
    <svg
      role="img"
      aria-label="intelXsa"
      viewBox="0 0 600 160"
      width={width}
      height={height}
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`${gradientId}-primary`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={theme.colors.accentDark} />
          <stop offset="100%" stopColor={theme.colors.accent} />
        </linearGradient>
        <linearGradient id={`${gradientId}-accent`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={theme.colors.accent} />
          <stop offset="100%" stopColor={theme.colors.headingOnDark} />
        </linearGradient>
      </defs>

      <rect
        width="600"
        height="160"
        rx="16"
        fill={theme.colors.primary}
      />

      <g transform="translate(30, 20)">
        <polygon
          points="60,6 110,34.5 110,85.5 60,114 10,85.5 10,34.5"
          fill="none"
          stroke={`url(#${gradientId}-primary)`}
          strokeWidth="5"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <line
          x1="36"
          y1="36"
          x2="84"
          y2="84"
          stroke={`url(#${gradientId}-primary)`}
          strokeWidth="9"
          strokeLinecap="round"
        />
        <line
          x1="84"
          y1="36"
          x2="36"
          y2="84"
          stroke={`url(#${gradientId}-accent)`}
          strokeWidth="9"
          strokeLinecap="round"
        />
        <circle cx="60" cy="60" r="4.5" fill={theme.colors.headingOnDark} />
      </g>

      <g transform="translate(180, 94)">
        <text
          fontFamily={theme.fontFamily}
          fontSize="48"
          letterSpacing="1.5"
        >
          <tspan fill={theme.colors.headingOnDark} fontWeight="600">intel</tspan>
          <tspan fill={`url(#${gradientId}-primary)`} fontWeight="800">x</tspan>
          <tspan fill={theme.colors.textFaint} fontWeight="400">sa</tspan>
        </text>
      </g>
    </svg>
  )
}
