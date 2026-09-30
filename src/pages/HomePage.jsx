import Hero from '../components/Hero'
import ServiceHighlights from '../components/ServiceHighlights'
import AdditionalServices from '../components/AdditionalServices'
import WhyChooseUs from '../components/WhyChooseUs'
import Industries from '../components/Industries'
import Testimonial from '../components/Testimonial'
import CallToAction from '../components/CallToAction'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <AdditionalServices />
      <WhyChooseUs />
      <Industries />
      <Testimonial />
      <CallToAction />
    </>
  )
}
