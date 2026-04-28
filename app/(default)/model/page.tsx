import ModelViewer from '@/components/model-viewer'

export const metadata = {
  title: '3D模型展示 - 绿脉机器人',
  description: '交互式展示六驱全地形自适应抓取机器人结构。',
}

const highlights = [
  {
    name: '六轮越野底盘',
    value: '复杂地形通行与稳定驻停',
  },
  {
    name: '机械臂安装位',
    value: '目标靠近、夹取与复位动作',
  },
  {
    name: '组合模型浏览',
    value: '查看底盘与机械臂空间关系',
  },
]

export default function ModelPage() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-14">
            <h1 className="h1 mb-4">3D模型展示</h1>
            <p className="text-xl text-gray-400">
              拖拽旋转、滚轮缩放，查看导入的机器人三维模型结构。
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <ModelViewer />

            <aside className="border border-gray-700 bg-gray-800/70 p-6">
              <h2 className="text-2xl font-bold text-gray-100 mb-5">结构标注</h2>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item.name} className="border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                    <div className="text-sm text-purple-300 mb-1">{item.name}</div>
                    <div className="text-lg font-semibold text-gray-100">{item.value}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-gray-400">
                默认展示小车与机械臂组合模型，用于观察六轮底盘、机械臂作业空间和整机布局关系。也可以单独查看小车或机械臂原始模型。
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
