import { content } from '../config/content'

export default function Process() {
  const { heading, subheading, steps } = content.process
  return (
    <section className="section-pad" style={{ backgroundColor: 'var(--primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3">How It Works</p>
          <h2 className="section-heading text-white mb-4">{heading}</h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-faint)' }}>
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full w-full h-px -translate-x-1/2 z-0"
                  style={{ backgroundColor: 'var(--accent)', opacity: 0.3 }}
                />
              )}
              <div className="relative z-10">
                <div
                  className="text-4xl font-900 mb-4 leading-none"
                  style={{ color: 'var(--accent)', fontWeight: 900 }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-base font-700 text-white mb-2"
                  style={{ fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-faint)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
