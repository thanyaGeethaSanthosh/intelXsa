import Hero from '../components/Hero'
import ServiceHighlights from '../components/ServiceHighlights'
import WhyChooseUs from '../components/WhyChooseUs'
import ServicesOverview from '../components/ServicesOverview'
import Industries from '../components/Industries'
import Testimonial from '../components/Testimonial'
import CallToAction from '../components/CallToAction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <ServicesOverview />
      <Industries />
      <Testimonial />
      <CallToAction />
    </>
  )
}
