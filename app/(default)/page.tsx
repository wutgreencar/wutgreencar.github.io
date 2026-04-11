export const metadata = {
  title: '绿脉·六驱全地形自适应抓取机器人',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Testimonials_2 from '@/components/testimonials_2'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Testimonials_2 />

    </>
  )
}
