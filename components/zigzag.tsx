import Image from 'next/image'

import FeatImage01 from '@/public/images/技术路线.png'
import FeatImage02 from '@/public/images/整体系统设计.png'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              六轮智能农业作业机器人
            </div>
            <h2 className="h2 mb-4">从农业场景问题出发的技术路线</h2>
            <p className="text-xl text-gray-400"></p>
          </div>

          <div className="grid gap-20">
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    感知到执行
                  </div>
                  <h3 className="h3 mb-3">技术路线图</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    项目围绕果园、温室和田间等非结构化场景展开，先分析复杂地形通行、光照遮挡、目标定位和机械臂可达性等问题，再将 RGB-D 感知、分层路径规划和机械臂协同控制集成到实机平台。集成阶段引入基于 ROS2 与 MoveIt2 的机械臂子系统，将 YOLO 检测、深度投影和坐标变换链路接到臂侧规划脚本，使感知与规划结果能够落到抓取演示。
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>机器视觉与语义分割</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>路径规划与分层异构算法</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>ROS2、MoveIt2 与机械臂实机集成</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                    系统集成
                  </div>
                  <h3 className="h3 mb-3">整体系统设计</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    系统采用上位机与下位机分层控制结构。上位机负责 RGB-D 图像处理、果实识别、深度定位、路径规划和任务调度；下位机负责电机驱动、编码器与 IMU 状态采集、PID 闭环控制和底盘安全保护。机械臂关节与末端位姿纳入同一任务链路，便于在底盘驻停后下发 MoveIt 轨迹，并在识别失败、目标不可达或深度异常时回退重定位。
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>自主导航</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>上下位机协同控制</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>姿态感知、PID 控制与机械臂轨迹协同</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
