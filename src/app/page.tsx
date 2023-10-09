import Background from '@/images/background.png'
import Hero from '@/components/hero'
import Image from 'next/image'
import Products from '@/components/products'
import Testimonies from '@/components/testimonies'
import Works from '@/components/works'

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Testimonies />
      <Works />
    </>
  )
}
