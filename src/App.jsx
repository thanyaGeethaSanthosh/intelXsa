import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceHighlights from './components/ServiceHighlights'
import WhyChooseUs from './components/WhyChooseUs'
import ServicesOverview from './components/ServicesOverview'
import Process from './components/Process'
import Industries from './components/Industries'
import TaxCredit from './components/TaxCredit'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceHighlights />
        <WhyChooseUs />
        <ServicesOverview />
        <Process />
        <Industries />
        <TaxCredit />
        <Testimonial />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
