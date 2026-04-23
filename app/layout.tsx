import './css/style.css'

export const metadata = {
  title: '绿脉·六驱全地形自适应抓取机器人',
  description: '面向农业复杂场景的六轮自主导航与果实抓取机器人项目展示',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight">
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
