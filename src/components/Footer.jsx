import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'
import { content } from '../config/content'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const { description, links, legal } = content.footer
  const { phone, email, address } = content.company

  return (
    <footer style={{ backgroundColor: 'var(--primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            <Link to="/" className="inline-flex mb-4">
              <BrandLogo width={180} />
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-faint)' }}>
              {description}
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-xs font-700 uppercase tracking-widest mb-5" style={{ color: 'var(--accent)', fontWeight: 700 }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm whitespace-pre-line" style={{ color: 'var(--text-faint)' }}>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} style={{ color: 'var(--text-muted)' }} />
                <a href={`tel:${phone}`} className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-faint)' }}>
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} style={{ color: 'var(--text-muted)' }} />
                <a href={`mailto:${email}`} className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-faint)' }}>
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Links column */}
          <div>
            <h4 className="text-xs font-700 uppercase tracking-widest mb-5" style={{ color: 'var(--accent)', fontWeight: 700 }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-faint)' }}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-faint)' }}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{legal}</p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            <Link to="/contact" className="hover:text-white transition-colors" style={{ color: 'var(--accent)' }}>
              Contact Us
            </Link>
            {' '}·{' '}
            <Link to="/about" className="hover:text-white transition-colors" style={{ color: 'var(--text-muted)' }}>
              About
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
