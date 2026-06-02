import { useState, useRef, useEffect } from 'react'
import { Zap, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import { content } from '../config/content'

function DropdownMenu({ items, isOpen }) {
  return (
    <div
      className={`absolute top-full left-0 min-w-52 bg-white shadow-xl border-t-2 z-50 transition-all duration-200 ${
        isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
      }`}
      style={{ borderColor: 'var(--accent)' }}
    >
      {items.map((item) => (
        <a
          key={item}
          href="#"
          className="block px-5 py-3 text-sm font-medium hover:bg-section-alt transition-colors"
          style={{ color: 'var(--text-base)' }}
          onClick={(e) => e.preventDefault()}
        >
          {item}
        </a>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)

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

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'var(--primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div
              className="flex items-center justify-center w-8 h-8"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <Zap size={18} className="text-white" fill="white" />
            </div>
            <span className="text-white font-bold text-lg tracking-wide">
              {content.company.name}
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {content.nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                <DropdownMenu items={item.children} isOpen={activeDropdown === item.label} />
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
              <ShoppingCart size={18} />
              <span className="text-sm font-medium">0</span>
            </button>
            <a
              href="#contact"
              className="hidden lg:block btn-accent text-xs py-2.5 px-5"
            >
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
          mobileOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        style={{ backgroundColor: 'var(--section-dark)' }}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {content.nav.map((item) => (
            <div key={item.label}>
              <button
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold text-white/90 hover:text-white border-b border-white/10"
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
                <div className="pl-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <a
                      key={child}
                      href="#"
                      className="block px-3 py-2 text-sm text-white/60 hover:text-white transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#contact" className="btn-accent block text-center text-xs mt-4 py-3">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
