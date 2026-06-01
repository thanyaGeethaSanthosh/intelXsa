// =====================================================================
//  THEME CONFIGURATION
//  Change any value here — it updates the entire site automatically.
// =====================================================================

export const theme = {
  colors: {
    // ── Brand ──────────────────────────────────────────────────────
    primary:     '#0a0a0a',   // Main dark color (navbar, dark sections)
    accent:      '#c9a227',   // Gold accent — buttons, highlights
    accentDark:  '#a8841a',   // Darker gold for button hover states

    // ── Section backgrounds ────────────────────────────────────────
    sectionAlt:  '#f5f5f5',   // Light gray — alternating sections
    sectionDark: '#111111',   // Very dark — icon grids, dark cards

    // ── Text ───────────────────────────────────────────────────────
    textBase:    '#1a1a1a',   // Primary body text (on light bg)
    textMuted:   '#888888',   // Secondary / muted text
    textFaint:   '#cccccc',   // Faint text on dark backgrounds

    // ── UI chrome ─────────────────────────────────────────────────
    borderBase:  '#e0e0e0',   // Dividers and borders
    overlay:     'rgba(0,0,0,0.72)', // Dark overlay over hero images
  },

  // ── Typography ──────────────────────────────────────────────────
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
}
