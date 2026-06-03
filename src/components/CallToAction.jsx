import { content } from '../config/content'

export default function CallToAction() {
  const { heading, description, cta, backgroundImage } = content.cta
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center img-overlay section-pad"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow mb-4">Let's Talk</p>
        <h2 className="section-heading text-white mb-5">{heading}</h2>
        <p className="text-lg text-white/75 leading-relaxed mb-10">{description}</p>
        <a href="mailto:info@magenergy.com" className="btn-accent text-sm">
          {cta}
        </a>
      </div>
    </section>
  )
}
