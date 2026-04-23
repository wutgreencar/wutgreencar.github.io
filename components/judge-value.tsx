const comparisons = [
  ['复杂地形', '依赖较平整路线，越障与稳定性受限', '六驱底盘提升接地能力，面向果园与田间起伏地面'],
  ['识别定位', '只展示目标检测结果，难以衔接执行端', '将果实信息转换为机械臂可调用的空间坐标'],
  ['任务流程', '导航、识别、抓取常作为分散模块演示', '构建“巡行-识别-驻停-抓取-反馈”闭环链路'],
  ['规划效率', '单层规划在复杂三维场景中计算压力大', '局部高分辨率规划与全局粗规划协同降低计算量'],
]

const highlights = [
  {
    title: '评委看点 01',
    value: '系统完整度',
    text: '底盘、感知、规划、机械臂和控制链路都在同一个作业任务中出现。',
  },
  {
    title: '评委看点 02',
    value: '农业适配性',
    text: '围绕果园、田间非结构化地形设计，不只是通用移动机器人演示。',
  },
  {
    title: '评委看点 03',
    value: '可展示成果',
    text: '视频、系统图、算法图和文档入口共同支撑答辩时的证据链。',
  },
]

export default function JudgeValue() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4" data-aos="fade-right">
              <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                方案价值对比
              </div>
              <h2 className="h2 mb-4">把创新点变成评委能快速判断的差异</h2>
              <p className="text-xl text-gray-400">
                通过对比常规做法与本项目方案，突出六驱平台、视觉定位、分层规划和机械臂协同的综合价值。
              </p>
            </div>

            <div className="lg:col-span-8" data-aos="fade-left">
              <div className="overflow-x-auto rounded-lg border border-gray-800">
                <div className="min-w-[720px]">
                  <div className="grid grid-cols-3 bg-gray-800/80 text-sm font-semibold text-gray-300">
                    <div className="px-4 py-3">维度</div>
                    <div className="px-4 py-3">常规方案</div>
                    <div className="px-4 py-3">绿脉方案</div>
                  </div>
                  {comparisons.map(([dimension, common, ours]) => (
                    <div key={dimension} className="grid grid-cols-3 border-t border-gray-800 bg-gray-900/70 text-sm md:text-base">
                      <div className="px-4 py-4 font-semibold text-gray-100">{dimension}</div>
                      <div className="px-4 py-4 text-gray-500">{common}</div>
                      <div className="px-4 py-4 text-emerald-200">{ours}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => (
              <article
                key={item.title}
                className="rounded-lg border border-gray-800 bg-gray-900 p-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-sm font-medium text-purple-300">{item.title}</div>
                <h3 className="mt-3 text-2xl font-bold text-white">{item.value}</h3>
                <p className="mt-3 text-gray-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
