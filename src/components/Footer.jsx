import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail } from 'lucide-react'
import { content } from '../config/content'
import BrandLogo from './BrandLogo'

function FooterLink({ href, children }) {
  const cls = 'text-sm transition-colors hover:text-white'
  const style = { color: 'var(--text-faint)' }
  return href.startsWith('/') ? (
    <Link to={href} className={cls} style={style}>{children}</Link>
  ) : (
    <a href={href} className={cls} style={style}>{children}</a>
  )
}

function ColumnHeading({ children }) {
  return (
    <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--accent)' }}>
      {children}
    </h4>
  )
}

export default function Footer() {
  const { description, links, legal } = content.footer
  const { phone, email, address } = content.company
  const servicesNav = content.nav.find((item) => item.label === 'Services')

  return (
    <footer style={{ backgroundColor: 'var(--primary)' }}>
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex mb-6">
              <BrandLogo width={180} />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--text-faint)' }}>
              {description}
            </p>
          </div>

          {/* Services column */}
          {servicesNav && (
            <div className="lg:col-span-3">
              <ColumnHeading>{servicesNav.label}</ColumnHeading>
              <ul className="space-y-3">
                {servicesNav.children.filter((c) => !c.hidden).map((child) => (
                  <li key={child.label}>
                    <FooterLink href={child.href}>{child.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact column */}
          <div className="lg:col-span-3">
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="flex-shrink-0 mt-1" style={{ color: 'var(--text-muted)' }} />
                <span className="text-sm whitespace-pre-line" style={{ color: 'var(--text-faint)' }}>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} strokeWidth={1.5} style={{ color: 'var(--text-muted)' }} />
                <a href={`tel:${phone}`} className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-faint)' }}>
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} strokeWidth={1.5} style={{ color: 'var(--text-muted)' }} />
                <a href={`mailto:${email}`} className="text-sm hover:text-white transition-colors" style={{ color: 'var(--text-faint)' }}>
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Links column */}
          <div className="lg:col-span-2">
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t hairline-d">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{legal}</p>
          <p className="text-xs flex items-center gap-3" style={{ color: 'var(--text-muted)' }}>
            <Link to="/contact" className="hover:text-white transition-colors" style={{ color: 'var(--accent)' }}>
              Contact Us
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/about" className="hover:text-white transition-colors" style={{ color: 'var(--text-muted)' }}>
              About
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
