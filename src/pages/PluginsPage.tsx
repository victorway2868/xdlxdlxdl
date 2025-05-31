import { useState, useEffect } from 'react';

interface Plugin {
  id: number;
  title: string;
  type: 'video' | 'image' | 'audio';
  url: string;
  platform: string;
  playType: string;
  viewCount: number;
  isHot: boolean;
  thumbnail: string;
  duration?: number;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

function PluginsPage() {
  const [plugins, setPlugins] = useState<Plugin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlugin, setSelectedPlugin] = useState<Plugin | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const fetchPlugins = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('http://localhost:8000/api/v1/media-manifest/public/category/plugin', {
          method: 'GET',
          headers: {
            'accept': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.plugin && Array.isArray(data.plugin)) {
          setPlugins(data.plugin);
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        console.error('Error fetching plugins:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch plugins');
      } finally {
        setLoading(false);
      }
    };

    fetchPlugins();
  }, []);

  const getTypeText = (type: string) => {
    switch (type) {
      case 'video': return '视频';
      case 'audio': return '音频';
      case 'image': return '图片';
      default: return type;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎥';
      case 'audio': return '🎵';
      case 'image': return '🖼️';
      default: return '📄';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner': return '初级';
      case 'intermediate': return '中级';
      case 'advanced': return '高级';
      default: return level;
    }
  };

  const getPlayUrl = (plugin: Plugin) => {
    // 如果是抖音平台，转换URL格式
    if (plugin.platform === 'douyin') {
      // 提取URL中的数字ID（长度大于12位的数字）
      const videoIdMatch = plugin.url.match(/(\d{13,})/);
      if (videoIdMatch && videoIdMatch[1]) {
        const videoId = videoIdMatch[1];
        return `https://open.douyin.com/player/video?vid=${videoId}&autoplay=0`;
      }
    }
    // 其他平台直接返回原URL
    return plugin.url;
  };

  const handlePluginClick = (plugin: Plugin) => {
    setSelectedPlugin(plugin);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedPlugin(null);
  };

  const formatDuration = (seconds?: number) => {
    if (!seconds) return '';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatViewCount = (count: number) => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}万`;
    }
    return count.toString();
  };

  if (loading) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold mb-4">正在加载插件工具...</h2>
            <p className="text-gray-600 dark:text-gray-300">
              正在从API获取最新的插件工具数据
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">API连接错误</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              无法连接到API服务器: {error}
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6 text-left max-w-2xl mx-auto">
              <h3 className="font-semibold mb-2">请检查:</h3>
              <ul className="text-sm space-y-1">
                <li>• API服务器是否在 http://localhost:8000 运行</li>
                <li>• 网络连接是否正常</li>
                <li>• API端点是否可访问</li>
              </ul>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary px-6 py-3"
            >
              重新加载
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">插件工具库</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            浏览我们的插件工具视频、音频和图片资源
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2"
              title="刷新数据"
            >
              🔄 刷新数据
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              数据来源: API (localhost:8000)
            </span>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-primary-600">{plugins.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">总插件数</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-green-600">{plugins.filter(p => p.type === 'video').length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">视频插件</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-blue-600">{plugins.filter(p => p.type === 'audio').length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">音频插件</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <div className="text-2xl font-bold text-purple-600">{plugins.filter(p => p.isHot).length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">热门插件</div>
          </div>
        </div>

        {/* 插件列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plugins.map(plugin => (
            <div
              key={plugin.id}
              onClick={() => handlePluginClick(plugin)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              {/* 缩略图区域 */}
              <div className="h-40 bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center">
                {plugin.thumbnail && plugin.thumbnail !== 'https://via.placeholder.com/300x200?text=No+Image' ? (
                  <img
                    src={plugin.thumbnail}
                    alt={plugin.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="text-gray-400 dark:text-gray-500 text-sm">无图片</div>';
                    }}
                  />
                ) : (
                  <div className="text-6xl text-gray-400">
                    {getTypeIcon(plugin.type)}
                  </div>
                )}
                
                {/* 热门标签 */}
                {plugin.isHot && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    🔥 热门
                  </div>
                )}
                
                {/* 时长显示 */}
                {plugin.duration && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                    {formatDuration(plugin.duration)}
                  </div>
                )}
              </div>

              {/* 内容区域 */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded-full">
                    {getTypeText(plugin.type)}
                  </span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                    {getLevelText(plugin.level)}
                  </span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {plugin.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {plugin.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    👁️ {formatViewCount(plugin.viewCount)} 次观看
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                    {plugin.platform}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态 */}
        {plugins.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">暂无插件工具</h3>
            <p className="text-gray-600 dark:text-gray-300">请稍后再来查看更多插件工具内容</p>
          </div>
        )}

        {/* 视频播放弹窗 */}
        {showVideoModal && selectedPlugin && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={closeVideoModal}
          >
            <div
              className="bg-black rounded-lg w-full h-full max-w-7xl max-h-[95vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 弹窗头部 - 更紧凑 */}
              <div className="flex items-center justify-between p-3 bg-gray-900 text-white">
                <h3 className="text-sm sm:text-base font-medium truncate pr-4">{selectedPlugin.title}</h3>
                <button
                  onClick={closeVideoModal}
                  className="text-gray-300 hover:text-white text-xl sm:text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
              </div>

              {/* 视频内容区域 - 占据主要空间 */}
              <div className="flex-1 bg-black flex items-center justify-center min-h-0">
                <div className="w-full h-full">
                  <iframe
                    src={getPlayUrl(selectedPlugin)}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={selectedPlugin.title}
                  />
                </div>
              </div>

              {/* 视频信息 - 可折叠的底部区域 */}
              <div className="bg-gray-900 text-white p-3 max-h-24 overflow-y-auto">
                <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300">
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                    {selectedPlugin.platform}
                  </span>
                  <span>{formatViewCount(selectedPlugin.viewCount)}次观看</span>
                  {selectedPlugin.duration && (
                    <span>{formatDuration(selectedPlugin.duration)}</span>
                  )}
                  <span>{getTypeText(selectedPlugin.type)}</span>
                  <span>{getLevelText(selectedPlugin.level)}</span>
                  {selectedPlugin.isHot && <span className="text-red-400">🔥 热门</span>}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 line-clamp-2">
                  {selectedPlugin.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PluginsPage;
