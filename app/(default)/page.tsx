export const metadata = {
  title: 'Home - Chainality',
  description: 'European asset exchange',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Flower from '@/components/flower'
import Testimonials from '@/components/testimonials'
import Investment from '@/components/investment'

export default function Home() {
  return (
    <>
      <Hero />
      <Flower />
      <Features />
      <Zigzag />
      <Investment />
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
