const videos = [
  {
    title: '自主导航演示',
    description:
      '展示机器人在农业场景中的路径跟踪、障碍规避与末端停靠能力。',
    src: '/videos/video_2.mp4',
  },
  {
    title: '机械臂抓取演示',
    description:
      '展示机械臂接近目标、末端调整与抓取执行的完整作业过程。',
    src: '/videos/video_3.mp4',
  },
]

const results = [
  { label: '导航能力', value: '路径跟踪 / 避障 / 停靠' },
  { label: '抓取链路', value: '识别定位 / 轨迹规划 / 执行' },
  { label: '展示证据', value: '实机视频 + 技术文档' },
]

export default function VideoShowcase() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
              实机验证成果
            </div>
            <h2 className="h2 mb-4">用视频证明机器人确实跑起来了</h2>
            <p className="text-xl text-gray-400">
              把评委最关心的“能否移动、能否定位、能否抓取”提前放到首页中段。
            </p>
          </div>

          <div className="grid gap-4 pb-8 md:grid-cols-3">
            {results.map((item) => (
              <div key={item.label} className="rounded-lg border border-gray-800 bg-gray-900/70 p-4 text-center">
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="mt-2 font-semibold text-gray-100">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {videos.map((video, index) => (
              <article
                key={video.title}
                className="rounded-2xl border border-gray-800 bg-gray-900/60 p-4 sm:p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">
                  <h3 className="h4 text-gray-100 mb-2">{video.title}</h3>
                  <p className="text-gray-400">{video.description}</p>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-800 bg-black shadow-2xl shadow-purple-900/10">
                  <video
                    className="w-full h-auto"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    当前浏览器不支持视频播放。
                  </video>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
