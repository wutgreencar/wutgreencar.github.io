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

export default function VideoShowcase() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">核心作业视频展示</h2>
            <p className="text-xl text-gray-400">
              在主界面直接查看自主导航与机械臂抓取的实际演示。
            </p>
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
                    Your browser does not support the video tag.
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
