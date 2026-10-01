import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { content } from '../config/content'

export default function CallToAction() {
  const { heading, description, cta, backgroundImage } = content.cta
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <div
          className="relative bg-cover bg-center img-overlay px-8 py-16 sm:px-14 sm:py-20 lg:px-20"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow on-dark mb-6">Let's Talk</p>
              <h2 className="section-heading" style={{ color: 'var(--heading-on-dark)' }}>{heading}</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base text-white/75 leading-relaxed mb-8">{description}</p>
              <Link to="/contact" className="btn-accent">
                {cta}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
