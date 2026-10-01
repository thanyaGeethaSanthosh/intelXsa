import { content } from '../config/content'
import { industryIconMap } from '../config/icons'

export default function Industries() {
  const { heading, subheading, items } = content.industries
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6">Who We Serve</p>
            <h2 className="section-heading" style={{ color: 'var(--text-base)' }}>{heading}</h2>
          </div>
          <p className="lead lg:col-span-6">
            {subheading}
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px border"
          style={{ backgroundColor: 'var(--border-base)', borderColor: 'var(--border-base)' }}
        >
          {items.map((item) => {
            const Icon = industryIconMap[item.icon]
            return (
              <div
                key={item.title}
                className="group flex flex-col items-start gap-6 p-6 sm:p-8 bg-white transition-colors hover:bg-section-alt"
              >
                {Icon && (
                  <Icon
                    size={28}
                    strokeWidth={1.3}
                    className="transition-colors"
                    style={{ color: 'var(--accent-dark)' }}
                  />
                )}
                <span className="font-heading text-lg leading-snug" style={{ fontWeight: 500, color: 'var(--text-base)' }}>
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
