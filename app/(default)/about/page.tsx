export const metadata = {
    title: '关于我们 - 运输机器人项目',
    description: '了解我们的团队和项目愿景',
}

export default function About() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* 页面标题 */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4">关于我们</h1>
                        <p className="text-xl text-gray-400">致力于农业场景下的自主导航与果实摘取作业</p>
                    </div>

                    {/* 内容区域 */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-gray-400">
                            <h3 className="h3 text-gray-200 mb-4">项目背景</h3>
                            <p className="mb-8">
                                近年来，智慧农业快速发展，农业机器人正逐步从单一巡检、运输向自主作业方向升级。果园、温室和田间等农业环境通常存在地面不平整、作物分布不规则、光照变化明显、枝叶遮挡较多等特点，这对机器人的移动能力、环境感知能力和作业执行能力都提出了更高要求。现有许多移动平台虽然具备基本行驶能力，但在目标识别、精准停靠以及机械臂协同作业方面仍存在不足，难以满足实际采摘需求。为此，本项目围绕农业场景中的简单果实摘取任务，设计了一套集六轮底盘、自主导航、视觉识别和机械臂操作于一体的智能作业系统，使机器人能够完成从自主巡行到目标摘取的闭环任务流程。
                            </p>

                            <h3 className="h3 text-gray-200 mb-4">项目基础</h3>
                            <p className="mb-8">
                               我们前期已完成六轮机器人平台的搭建，包括底盘结构设计、驱动控制系统开发以及基础运动调试。同时，已开展视觉识别、路径规划和机械臂协同控制等模块的集成工作，并完成相关功能测试与验证。当前系统已具备农业场景下的基本自主移动能力，可结合视觉模块完成目标识别与定位，并通过机械臂执行简单摘取动作，为后续进一步提升整机稳定性和作业成功率奠定了基础。
                            </p>

                            <h3 className="h3 text-gray-200 mb-4">创新点</h3>
                            <ul className="list-disc list-inside mb-8">
                                <li className="mb-2">六轮底盘适应农业复杂地形</li>
                                <li className="mb-2">自主导航与机械臂一体化设计</li>
                                <li className="mb-2">果实识别与空间定位结合</li>
                                <li className="mb-2">面向实际作业的闭环任务流程</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}