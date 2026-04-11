export const metadata = {
    title: '了解更多 - 运输机器人项目',
    description: '深入了解我们的技术细节和应用场景',
}

export default function LearnMore() {
    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* 页面标题 */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h1 mb-4">技术详情</h1>
                        <p className="text-xl text-gray-400">深入了解我们的核心技术和应用场景</p>
                    </div>

                    {/* 内容区域 */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-gray-400">
                            <h3 className="h3 text-gray-200 mb-4">核心技术</h3>
                            <div className="mb-8">
                                <h4 className="h4 text-gray-200 mb-2">自主导航系统</h4>
                                <p className="mb-4">
                                    结合视觉感知与路径规划算法，实现六轮小车在农业场景中的自主巡行、路径跟踪与障碍规避，并能够在接近目标区域后完成停车对位，为后续机械臂作业提供基础。
                                </p>

                                <h4 className="h4 text-gray-200 mb-2">果实识别与定位</h4>
                                <p className="mb-4">
                                    通过视觉识别技术对目标果实进行检测，并结合空间位置信息完成目标定位，将图像中的果实信息转换为机械臂可调用的坐标数据，提高后续摘取的准确性和可行性。
                                </p>

                                <h4 className="h4 text-gray-200 mb-2">机械臂控制系统</h4>
                                <p className="mb-4">
                                    根据目标果实位置进行机械臂运动规划与末端调整，完成接近、夹持和简单摘取动作，实现从目标识别到作业执行的衔接，提升整机协同作业能力。
                                </p>
                                 <h4 className="h4 text-gray-200 mb-2">六轮底盘运动控制</h4>
                                <p className="mb-4">
                                    采用六轮底盘结构提升复杂地形下的通过性和稳定性，并结合运动控制策略保证机器人在果园、田间等非结构化环境中的平稳行驶，为视觉识别和机械臂作业提供稳定平台。
                                </p>
                            </div>

                            <h3 className="h3 text-gray-200 mb-4">应用场景</h3>
                            <ul className="list-disc list-inside mb-8">
                                <li className="mb-2">果园果实采摘</li>
                                <li className="mb-2">温室作物作业</li>
                                <li className="mb-2">农业样本采集</li>
                                <li className="mb-2">田间自主巡检</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}