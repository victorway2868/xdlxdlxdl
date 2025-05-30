import { useState } from 'react';

function TutorialsPage() {
  const categories = [
    "全部",
    "入门指南",
    "软件设置",
    "硬件设置",
    "直播优化",
    "内容创作",
    "高级技巧"
  ];

  const [activeCategory, setActiveCategory] = useState("全部");

  const tutorials = [
    {
      id: 1,
      title: "小斗笠直播工具入门指南",
      description: "学习设置小斗笠直播工具进行首次直播的基础知识。",
      category: "入门指南",
      duration: "15 分钟",
      level: "初级",
      thumbnail: "https://via.placeholder.com/300x200",
      featured: true
    },
    {
      id: 2,
      title: "优化直播设置以提升画质",
      description: "找到直播质量和性能之间的完美平衡。",
      category: "直播优化",
      duration: "22 分钟",
      level: "中级",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      title: "设置多摄像头直播",
      description: "为您的直播创建专业的多摄像头设置。",
      category: "硬件设置",
      duration: "18 分钟",
      level: "中级",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 4,
      title: "创建自定义覆盖层",
      description: "设计符合您品牌和风格的独特覆盖层。",
      category: "内容创作",
      duration: "30 分钟",
      level: "中级",
      thumbnail: "https://via.placeholder.com/300x200",
      featured: true
    },
    {
      id: 5,
      title: "高级音频配置",
      description: "通过高级混音和处理完善您直播的音频效果。",
      category: "高级技巧",
      duration: "25 分钟",
      level: "高级",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 6,
      title: "安装小斗笠插件",
      description: "使用强大的插件扩展小斗笠直播工具的功能。",
      category: "软件设置",
      duration: "12 分钟",
      level: "初级",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 7,
      title: "设置直播提醒",
      description: "为订阅和打赏配置引人入胜的提醒效果。",
      category: "软件设置",
      duration: "20 分钟",
      level: "初级",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 8,
      title: "优化您的灯光设置",
      description: "为专业外观的直播创建完美的灯光效果。",
      category: "硬件设置",
      duration: "15 分钟",
      level: "中级",
      thumbnail: "https://via.placeholder.com/300x200"
    }
  ];

  const filteredTutorials = activeCategory === "全部"
    ? tutorials
    : tutorials.filter(tutorial => tutorial.category === activeCategory);

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">直播教程</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            通过我们的综合教程学习如何设置、优化和增强您的直播。
          </p>
        </div>

        {/* Featured Tutorials */}
        {featuredTutorials.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">精选教程</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredTutorials.map(tutorial => (
                <div key={tutorial.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tutorial.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {tutorial.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{tutorial.description}</p>
                    <div className="mt-auto">
                      <button className="btn btn-primary w-full">观看教程</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Tutorials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map(tutorial => (
            <div key={tutorial.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-200 dark:bg-gray-700">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tutorial.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{tutorial.description}</p>
                <div className="flex items-center mt-auto">
                  <span className={`px-2 py-1 rounded text-xs font-medium mr-2 ${
                    tutorial.level === '初级'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : tutorial.level === '中级'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {tutorial.level}
                  </span>
                  <button className="btn btn-primary flex-grow">观看教程</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Request Tutorial */}
        <div className="mt-16 bg-primary-50 dark:bg-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">找不到您需要的内容？</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            请求特定主题的教程，我们的团队将为您制作。
          </p>
          <button className="btn btn-primary px-6 py-3">请求教程</button>
        </div>
      </div>
    </div>
  );
}

export default TutorialsPage;
