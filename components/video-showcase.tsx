const videos = [
  {
    title: '自主导航介绍',
    description:
      '介绍六驱机器人自主导航系统的整体思路、感知输入与路径规划流程。',
    src: '/videos/video_1.mp4',
  },
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
  { label: '视频 01', value: '自主导航介绍' },
  { label: '视频 02', value: '自主导航演示' },
  { label: '视频 03', value: '机械臂抓取演示' },
]

export default function VideoShowcase() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full mb-4">
              最终展示视频
            </div>
            <h2 className="h2 mb-4">最终展示视频</h2>
            <p className="text-xl text-gray-400">
              依次展示自主导航介绍、自主导航实机演示和机械臂抓取演示。
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

          <div className="grid gap-8 lg:grid-cols-3">
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
