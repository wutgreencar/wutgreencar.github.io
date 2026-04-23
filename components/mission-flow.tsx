const steps = [
  {
    title: '环境感知',
    text: '摄像头与姿态信息同步采集，为导航与识别提供实时输入。',
    accent: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
  },
  {
    title: '目标识别',
    text: '视觉算法检测果实目标，并将图像信息转换为空间定位结果。',
    accent: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
  },
  {
    title: '路径规划',
    text: '分层规划生成可执行路径，兼顾复杂地形通过性与计算效率。',
    accent: 'text-amber-300 border-amber-500/30 bg-amber-500/10',
  },
  {
    title: '精准驻停',
    text: '底盘到达目标区域后完成姿态调整，进入机械臂工作范围。',
    accent: 'text-purple-300 border-purple-500/30 bg-purple-500/10',
  },
  {
    title: '机械臂抓取',
    text: 'MoveIt2 轨迹规划驱动机械臂完成接近、夹持与摘取动作。',
    accent: 'text-rose-300 border-rose-500/30 bg-rose-500/10',
  },
  {
    title: '状态反馈',
    text: '作业结果回传到控制流程，形成可持续迭代的闭环任务链。',
    accent: 'text-sky-300 border-sky-500/30 bg-sky-500/10',
  },
]

export default function MissionFlow() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
              系统闭环流程
            </div>
            <h2 className="h2 mb-4">从“看见果实”到“完成抓取”的连续任务链</h2>
            <p className="text-xl text-gray-400">
              不把导航、识别、抓取拆成孤立演示，而是展示机器人在真实农业作业中需要完成的完整协同流程。
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-8 right-8 top-10 h-px bg-gradient-to-r from-cyan-500/50 via-emerald-500/50 to-purple-500/50" aria-hidden="true" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="relative rounded-lg border border-gray-800 bg-gray-900 p-5"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border text-sm font-bold ${step.accent}`}>
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">{step.title}</h3>
                  <p className="text-sm leading-6 text-gray-400">{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3" data-aos="fade-up">
            <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-5">
              <div className="text-sm text-gray-500">任务价值</div>
              <div className="mt-2 text-2xl font-bold text-white">闭环作业</div>
              <p className="mt-2 text-gray-400">把底盘、感知、规划与机械臂执行放到同一条作业链中，展示整机协同能力。</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-5">
              <div className="text-sm text-gray-500">技术亮点</div>
              <div className="mt-2 text-2xl font-bold text-white">分层规划</div>
              <p className="mt-2 text-gray-400">局部高精度路径与全局低成本探索结合，支撑复杂三维环境中的实时规划。</p>
            </div>
            <div className="rounded-lg border border-gray-800 bg-gray-900/70 p-5">
              <div className="text-sm text-gray-500">落地能力</div>
              <div className="mt-2 text-2xl font-bold text-white">实机验证</div>
              <p className="mt-2 text-gray-400">首页前半部分直接呈现导航与抓取视频，让项目可信度更早建立。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
