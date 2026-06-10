import Hero from '@/components/Hero'
import NextSteps from '@/components/NextSteps'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="ticks"></div>
      <NextSteps />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
