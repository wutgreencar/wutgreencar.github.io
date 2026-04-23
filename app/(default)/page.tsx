export const metadata = {
  title: '绿脉·六驱全地形自适应抓取机器人',
  description: '展示六驱底盘、视觉感知、路径规划与机械臂抓取协同的农业作业机器人项目。',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import VideoShowcase from '@/components/video-showcase'
import MissionFlow from '@/components/mission-flow'
import JudgeValue from '@/components/judge-value'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Testimonials_2 from '@/components/testimonials_2'

export default function Home() {
  return (
    <>
      <Hero />
      <MissionFlow />
      <VideoShowcase />
      <JudgeValue />
      <Features />
      <Zigzag />
      <Testimonials />
      <Testimonials_2 />

    </>
  )
}
