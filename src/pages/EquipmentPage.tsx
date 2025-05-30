import { useState } from 'react';

function EquipmentPage() {
  const categories = [
    "全部",
    "摄像头",
    "麦克风",
    "灯光设备",
    "采集卡",
    "调音台",
    "配件"
  ];

  const [activeCategory, setActiveCategory] = useState("全部");

  const equipment = [
    {
      id: 1,
      name: "StreamCam Pro 4K 专业摄像头",
      description: "专业4K网络摄像头，支持60fps，具有出色的低光性能。",
      category: "摄像头",
      price: "¥999",
      rating: 4.8,
      image: "https://via.placeholder.com/300x300",
      features: [
        "4K分辨率30fps",
        "1080p 60fps",
        "人脸追踪自动对焦",
        "内置隐私快门",
        "可调节视野角度"
      ],
      recommended: true
    },
    {
      id: 2,
      name: "AudioMaster USB 麦克风",
      description: "录音室级别的电容麦克风，USB连接，设置简单。",
      category: "麦克风",
      price: "¥899",
      rating: 4.7,
      image: "https://via.placeholder.com/300x300",
      features: [
        "心形指向性",
        "24位/96kHz采样",
        "零延迟监听",
        "增益控制旋钮",
        "坚固金属结构"
      ],
      recommended: true
    },
    {
      id: 3,
      name: "RingLight Pro 环形灯",
      description: "18英寸LED环形灯，可调节色温和亮度。",
      category: "灯光设备",
      price: "¥599",
      rating: 4.5,
      image: "https://via.placeholder.com/300x300",
      features: [
        "3200K-5600K色温调节",
        "0-100%亮度调节",
        "手机支架",
        "遥控器",
        "稳定三脚架"
      ]
    },
    {
      id: 4,
      name: "StreamCapture 4K 采集卡",
      description: "高性能采集卡，支持4K分辨率游戏录制。",
      category: "采集卡",
      price: "¥1399",
      rating: 4.6,
      image: "https://via.placeholder.com/300x300",
      features: [
        "4K60 HDR采集",
        "USB 3.0连接",
        "超低延迟",
        "兼容所有主流直播软件",
        "即插即用"
      ],
      recommended: true
    },
    {
      id: 5,
      name: "AudioMix 4通道调音台",
      description: "紧凑型4通道音频调音台，带USB接口，专为直播设计。",
      category: "调音台",
      price: "¥1099",
      rating: 4.4,
      image: "https://via.placeholder.com/300x300",
      features: [
        "4个输入通道",
        "每通道3段均衡器",
        "USB音频接口",
        "耳机输出带音量控制",
        "电容麦克风幻象电源"
      ]
    },
    {
      id: 6,
      name: "StreamDeck Mini 控制面板",
      description: "可编程控制面板，6个可自定义LCD按键，用于直播控制。",
      category: "配件",
      price: "¥549",
      rating: 4.9,
      image: "https://via.placeholder.com/300x300",
      features: [
        "6个可自定义LCD按键",
        "一键操作",
        "集成主流直播平台",
        "紧凑设计",
        "可调节支架"
      ]
    },
    {
      id: 7,
      name: "BudgetCam 1080p 入门摄像头",
      description: "经济实惠的1080p网络摄像头，非常适合初学者。",
      category: "摄像头",
      price: "¥349",
      rating: 4.2,
      image: "https://via.placeholder.com/300x300",
      features: [
        "1080p 30fps",
        "自动光线校正",
        "内置麦克风",
        "通用夹式支架",
        "USB即插即用"
      ]
    },
    {
      id: 8,
      name: "VoicePro 动圈麦克风",
      description: "专业动圈麦克风，XLR连接，提供卓越的音频质量。",
      category: "麦克风",
      price: "¥1049",
      rating: 4.8,
      image: "https://via.placeholder.com/300x300",
      features: [
        "动圈心形指向",
        "XLR连接",
        "内置防喷罩",
        "包含防震架",
        "全金属结构"
      ]
    }
  ];

  const filteredEquipment = activeCategory === "全部"
    ? equipment
    : equipment.filter(item => item.category === activeCategory);

  const recommendedEquipment = equipment.filter(item => item.recommended);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">推荐直播设备</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            找到最佳的摄像头、麦克风、灯光和配件，打造专业的直播设置。
          </p>
        </div>

        {/* Recommended Equipment */}
        {recommendedEquipment.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">顶级推荐设备</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendedEquipment.map(item => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium px-2.5 py-0.5 rounded">
                        {item.category}
                      </span>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-600 dark:text-gray-300">{item.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    <p className="text-2xl font-bold text-primary-600 mb-4">{item.price}</p>
                    <div className="mt-auto">
                      <button className="btn btn-primary w-full">查看详情</button>
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

        {/* All Equipment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map(item => (
            <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-64 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-gray-600 dark:text-gray-300">{item.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-primary-600 mb-4">{item.price}</p>

                <h4 className="font-semibold mb-2">主要功能:</h4>
                <ul className="mb-4">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start mb-1">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button className="btn btn-primary w-full">查看详情</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Setup Guide */}
        <div className="mt-16 bg-primary-50 dark:bg-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">需要设备设置帮助？</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            查看我们详细的设置指南和教程，充分利用您的直播设备。
          </p>
          <a href="/tutorials" className="btn btn-primary px-6 py-3 inline-block">查看设置指南</a>
        </div>
      </div>
    </div>
  );
}

export default EquipmentPage;
