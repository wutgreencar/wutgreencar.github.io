export const metadata = {
    title: '技术详情 - 绿脉六轮农业自主采摘机器人',
    description: '深入了解六轮农业自主采摘机器人项目的硬件组成、软件架构、闭环流程与测试验证。',
}

const coreModules = [
    {
        title: '六轮越野移动底盘',
        text: '面向泥土、草地、小坡度和植株通道等农业非结构化地面，采用六轮结构提升接地面积、牵引能力和停车稳定性，为视觉定位和机械臂操作提供稳定移动平台。',
    },
    {
        title: 'RGB-D 感知与三维定位',
        text: '通过 RGB 图像识别果实、植株和障碍物，再结合深度图读取目标距离，将二维检测结果转换为相机坐标系下的三维点。',
    },
    {
        title: 'ROS2 任务调度',
        text: '将图像采集、目标识别、深度处理、路径规划、底盘控制、坐标变换和机械臂控制拆分为节点，通过话题、服务或动作完成模块协同。',
    },
    {
        title: '机械臂协同作业',
        text: '机械臂接收目标三维坐标，完成可达性判断、轨迹规划、末端靠近、夹爪动作和安全复位，验证视觉定位到执行端的闭环链路。',
    },
]

const taskFlow = [
    '环境感知与可通行区域判断',
    '自主巡行与局部避障',
    '果实识别与深度读取',
    '相机坐标到机械臂坐标转换',
    '底盘站位调整',
    '机械臂抓取或虚拟抓取验证',
    '结果反馈与下一轮任务',
]

const tests = [
    ['底盘通过性', '草地、泥地、小坡度和轻微障碍下的稳定行驶与重复路线偏差。'],
    ['感知定位', '不同光照、遮挡和距离下的果实检测、深度读取与三维坐标稳定性。'],
    ['自主导航', '无预先建图或弱先验场景下的局部避障、路径跟踪和目标附近驻停。'],
    ['机械臂抓取', '目标点可达性、逆运动学求解、末端接近、夹爪开合和失败复位。'],
    ['整机协同', '自主巡行、识别果实、三维定位、站位调整、机械臂执行的完整流程。'],
]

const improvements = [
    '完善相机内参、外参和机械臂基座坐标标定，降低定位链路累计误差。',
    '强化 RGB-D 融合与深度滤波，提高强光、阴影和遮挡条件下的鲁棒性。',
    '量化机械臂工作空间与底盘停车区域关系，建立目标距离和车体朝向约束。',
    '优化末端执行器结构与夹持力控制，使其更适合真实果实采摘。',
    '增加重新感知、重新定位、重新规划和安全复位机制，提高整机可靠性。',
]

export default function LearnMore() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4">技术详情</h1>
                        <p className="text-xl text-gray-400">
                            项目不是单独的小车、识别模型或机械臂演示，而是一套面向农业采摘任务的“移动-感知-定位-操作”闭环机器人系统。
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
                        <div className="space-y-12">
                            <section className="rounded-lg border border-gray-800 bg-gray-900/70 p-6 md:p-8">
                                <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                                    总体方案
                                </div>
                                <h2 className="h2 mb-4">六轮底盘承载，RGB-D 感知驱动，机械臂完成操作</h2>
                                <p className="text-lg leading-8 text-gray-400">
                                    机器人依靠六轮底盘在果园、温室和田间移动，利用 RGB-D 相机获取环境与果实信息，通过 ROS2 节点完成识别、深度处理、路径规划和坐标变换。底盘根据机械臂工作空间调整站位，机械臂再根据目标三维坐标完成靠近、夹持或虚拟抓取验证。
                                </p>
                            </section>

                            <section>
                                <h2 className="h2 mb-6">核心模块</h2>
                                <div className="grid gap-5 md:grid-cols-2">
                                    {coreModules.map((module) => (
                                        <article key={module.title} className="rounded-lg border border-gray-800 bg-gray-900 p-6">
                                            <h3 className="text-xl font-bold text-gray-100 mb-3">{module.title}</h3>
                                            <p className="leading-7 text-gray-400">{module.text}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <section className="rounded-lg border border-gray-800 bg-gray-900/70 p-6 md:p-8">
                                <h2 className="h2 mb-5">三维定位与坐标变换链</h2>
                                <p className="text-lg leading-8 text-gray-400 mb-5">
                                    项目的关键不止是检测到果实，而是把图像里的目标变成机械臂能使用的空间坐标。系统先读取检测框中心或目标区域的深度值，再结合相机内参完成像素点到相机坐标的转换，最后通过外参和机械臂基座关系传递到执行端。
                                </p>
                                <div className="overflow-x-auto rounded-lg border border-gray-800 bg-black/30 p-4">
                                    <code className="whitespace-nowrap text-sm text-emerald-200">
                                        图像像素 (u, v) -&gt; 相机坐标 camera -&gt; 底盘坐标 base -&gt; 机械臂基座 arm_base -&gt; 末端执行器 tool0
                                    </code>
                                </div>
                            </section>

                            <section>
                                <h2 className="h2 mb-6">测试验证重点</h2>
                                <div className="space-y-4">
                                    {tests.map(([title, text]) => (
                                        <article key={title} className="rounded-lg border border-gray-800 bg-gray-900 p-5">
                                            <h3 className="text-lg font-semibold text-gray-100 mb-2">{title}</h3>
                                            <p className="text-gray-400">{text}</p>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="h2 mb-5">后续改进方向</h2>
                                <ul className="grid gap-3 text-gray-400">
                                    {improvements.map((item) => (
                                        <li key={item} className="rounded-lg border border-gray-800 bg-gray-900 px-5 py-4">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <aside className="lg:sticky lg:top-28 rounded-lg border border-gray-800 bg-gray-900 p-6">
                            <h2 className="text-2xl font-bold text-gray-100 mb-5">闭环任务链</h2>
                            <ol className="space-y-4">
                                {taskFlow.map((step, index) => (
                                    <li key={step} className="flex gap-3">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 text-sm font-bold text-purple-200">
                                            {index + 1}
                                        </span>
                                        <span className="pt-1 text-gray-300">{step}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-6 border-t border-gray-800 pt-5">
                                <div className="text-sm text-gray-500">一句话概括</div>
                                <p className="mt-2 leading-7 text-gray-400">
                                    面向农业非结构化环境，实现从自主移动到目标抓取的闭环作业验证。
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}
