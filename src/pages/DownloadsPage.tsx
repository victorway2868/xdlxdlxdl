function DownloadsPage() {
  const tools = [
    {
      id: 1,
      name: "小斗笠直播工具核心版",
      description: "主要的直播助手应用程序，具有覆盖层管理、聊天集成和直播分析功能。",
      version: "2.5.1",
      size: "45 MB",
      os: ["Windows", "macOS", "Linux"],
      features: [
        "实时直播数据分析",
        "自定义覆盖层管理",
        "多平台聊天集成",
        "自动化提醒和通知",
        "直播计划和提醒功能"
      ]
    },
    {
      id: 2,
      name: "小斗笠覆盖层套装",
      description: "专业设计的覆盖层、提醒和转场效果集合，为您的直播增色添彩。",
      version: "1.8.0",
      size: "120 MB",
      os: ["Windows", "macOS"],
      features: [
        "50+ 可自定义覆盖层模板",
        "动画转场和提醒效果",
        "直播开始/结束画面",
        "社交媒体集成面板",
        "订阅和打赏提醒"
      ]
    },
    {
      id: 3,
      name: "小斗笠音频增强器",
      description: "先进的音频处理工具，提升您直播的音质效果。",
      version: "3.2.0",
      size: "28 MB",
      os: ["Windows", "macOS"],
      features: [
        "噪音抑制和回声消除",
        "语音均衡和增强",
        "语音时音乐自动降低",
        "多音源混音",
        "音效库和触发器"
      ]
    },
    {
      id: 4,
      name: "小斗笠场景切换器",
      description: "基于游戏事件、聊天命令或定时器的智能场景切换工具。",
      version: "1.4.2",
      size: "18 MB",
      os: ["Windows"],
      features: [
        "游戏事件检测和场景切换",
        "聊天命令场景控制",
        "定时场景轮换",
        "热键配置",
        "与小斗笠核心版集成"
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">下载直播工具</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            使用我们为各级别主播设计的专业级工具，提升您的直播体验。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="btn btn-primary px-6 py-3">立即下载</button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">版本: {tool.version}</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">大小: {tool.size}</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">系统: {tool.os.join(", ")}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">主要功能:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 dark:bg-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">需要入门帮助？</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            查看我们详细的教程，了解如何安装和配置这些工具以获得最佳的直播体验。
          </p>
          <a href="/tutorials" className="btn btn-primary px-6 py-3 inline-block">查看教程</a>
        </div>
      </div>
    </div>
  );
}

export default DownloadsPage;
