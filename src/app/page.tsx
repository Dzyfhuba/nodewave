import Background from '@/images/background.png'
import Hero from '@/components/hero'
import Image from 'next/image'
import Products from '@/components/products'
import Testimonies from '@/components/testimonies'
import Works from '@/components/works'
import How from '@/components/how'
import Examples from '@/components/examples'
import Pricing from '@/components/pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Testimonies />
      <Works />
      <How />
      <Examples />
      <Pricing />
    </>
  )
}
