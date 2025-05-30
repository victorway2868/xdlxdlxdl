function DebugPage() {
  const commonIssues = [
    {
      id: 1,
      title: "直播卡顿和掉帧",
      description: "直播过程中出现卡顿、缓冲或掉帧现象。",
      solutions: [
        "检查您的网络上传速度（建议最低5 Mbps）",
        "在直播软件中降低视频码率",
        "降低输出分辨率（尝试720p 30fps）",
        "关闭后台运行的不必要应用程序",
        "使用有线网络连接而不是Wi-Fi"
      ]
    },
    {
      id: 2,
      title: "音频问题",
      description: "麦克风质量、回音、背景噪音或音频同步问题。",
      solutions: [
        "检查直播软件中的麦克风连接和设置",
        "使用噪音抑制滤镜减少背景噪音",
        "如果音频不同步，为摄像头添加轻微延迟",
        "使用耳机防止扬声器产生回音",
        "考虑使用专用音频接口以获得更好的质量"
      ]
    },
    {
      id: 3,
      title: "CPU过载",
      description: "CPU使用率过高导致直播过程中出现性能问题。",
      solutions: [
        "使用硬件编码（NVIDIA用NVENC，AMD用AMF）而不是x264",
        "降低编码预设（使用faster而不是medium/slow）",
        "减少场景中活跃源的数量",
        "直播时关闭资源密集型应用程序",
        "如果问题持续，考虑升级CPU"
      ]
    },
    {
      id: 4,
      title: "摄像头无法工作",
      description: "摄像头在直播软件中不显示或视频质量差。",
      solutions: [
        "检查摄像头是否被其他应用程序占用",
        "更新摄像头驱动程序",
        "添加视频滤镜改善图像质量",
        "确保直播区域有充足的照明",
        "尝试不同的USB端口或线缆"
      ]
    }
  ];

  const services = [
    {
      id: 1,
      name: "基础直播诊断",
      description: "全面分析您的直播设置和性能问题。",
      price: "¥349",
      features: [
        "直播设置审查",
        "性能优化建议",
        "基础音视频故障排除",
        "包含可操作步骤的书面报告",
        "7天邮件支持"
      ]
    },
    {
      id: 2,
      name: "高级技术支持",
      description: "深度技术协助，通过远程访问解决复杂问题。",
      price: "¥699",
      features: [
        "与直播技术员远程会话",
        "硬件和软件配置",
        "高级音视频设置和优化",
        "自定义场景和覆盖层配置",
        "30天后续支持"
      ]
    },
    {
      id: 3,
      name: "高级直播改造",
      description: "完整重新设计和优化您的直播设置，实现最佳质量和性能。",
      price: "¥1399",
      features: [
        "完整直播设置审计和重新设计",
        "自定义图形和覆盖层创建",
        "高级场景转换和特效",
        "硬件推荐和配置",
        "3个月优先技术支持"
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">直播调试服务</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            通过我们的专业调试服务解决技术问题并优化您的直播。
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">常见直播问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map(issue => (
              <div key={issue.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{issue.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{issue.description}</p>

                  <h4 className="font-semibold mb-2">快速解决方案:</h4>
                  <ul className="space-y-2">
                    {issue.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Diagnostic Tool */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">直播健康检查</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            使用我们的自诊断工具识别常见的直播问题。上传您的直播日志或OBS设置进行快速分析。
          </p>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              上传直播日志
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                拖拽文件到此处，或点击选择文件
              </p>
              <input type="file" className="hidden" />
              <button className="mt-4 btn btn-primary">上传文件</button>
            </div>
          </div>

          <button className="btn btn-primary w-full md:w-auto">运行诊断</button>
        </div>

        {/* Professional Services */}
        <div>
          <h2 className="text-2xl font-bold mb-6">专业调试服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary-600 mb-4">{service.price}</p>

                  <h4 className="font-semibold mb-2">包含:</h4>
                  <ul className="mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start mb-2">
                        <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <button className="btn btn-primary w-full">预订服务</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-primary-50 dark:bg-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">需要紧急帮助？</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            联系我们的支持团队，获得直播问题的紧急帮助。
          </p>
          <a href="/contact" className="btn btn-primary px-6 py-3 inline-block">联系支持</a>
        </div>
      </div>
    </div>
  );
}

export default DebugPage;
