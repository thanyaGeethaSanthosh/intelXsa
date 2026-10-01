import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { content } from '../config/content'
import BrandLogo from './BrandLogo'

function NavChild({ item }) {
  const cls = 'block px-6 py-3 text-sm transition-colors hover:bg-section-alt hover:text-accent-dark'
  if (item.href.startsWith('/')) {
    return (
      <Link to={item.href} className={cls} style={{ color: 'var(--text-base)' }}>
        {item.label}
      </Link>
    )
  }
  return (
    <a href={item.href} className={cls} style={{ color: 'var(--text-base)' }}>
      {item.label}
    </a>
  )
}

function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 transition-all duration-200 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`min-w-64 bg-white py-3 border transition-transform duration-200 ${isOpen ? 'translate-y-0' : '-translate-y-1'}`}
        style={{ borderColor: 'var(--border-base)', boxShadow: '0 18px 40px rgba(0,0,0,0.08)' }}
      >
        {items.filter((item) => !item.hidden).map((item) => (
          <NavChild key={item.label} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [scrolled, setScrolled]             = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const navItems = content.nav.filter((item) => !item.hidden)

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: 'var(--primary)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: scrolled ? '0 6px 24px rgba(0,0,0,0.25)' : 'none',
      }}
    >
      <div className="container-x">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <BrandLogo width={150} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1.5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/75 hover:text-white transition-colors"
                  aria-expanded={activeDropdown === item.label}
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                <DropdownMenu items={item.children} isOpen={activeDropdown === item.label} />
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:inline-flex btn-accent !py-3 !px-6">
              Get Started
            </a>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[calc(100vh-5rem)] overflow-y-auto' : 'max-h-0'
        }`}
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <div className="container-x pt-2 pb-8">
          {navItems.map((item) => (
            <div key={item.label} className="border-b hairline-d">
              <button
                className="flex items-center justify-between w-full py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 hover:text-white"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                }
              >
                {item.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                />
              </button>
              {mobileExpanded === item.label && (
                <div className="pb-3 space-y-1">
                  {item.children.filter((child) => !child.hidden).map((child) =>
                    child.href.startsWith('/') ? (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ) : (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
          <a href="#contact" className="btn-accent w-full mt-6" onClick={() => setMobileOpen(false)}>
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
