import { useState, useEffect } from 'react';
import { mediaData } from '../data/mediaData';

interface Tutorial {
  id?: number;
  title: string;
  type: 'video' | 'image' | 'audio';
  url: string;
  platform: string;
  playType: string;
  viewCount?: number;
  isHot?: boolean;
  thumbnail?: string;
  duration?: number;
  description?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
}

function TutorialsPage() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const loadTutorials = () => {
      try {
        setLoading(true);
        setError(null);

        // Load data from local media_api.json
        const tutorialData = mediaData.tutorial || [];

        // Transform data to match expected format with default values
        const transformedTutorials: Tutorial[] = tutorialData.map((tutorial, index) => ({
          id: index + 1,
          title: tutorial.title,
          type: tutorial.type as 'video' | 'image' | 'audio',
          url: tutorial.url,
          platform: tutorial.platform,
          playType: tutorial.playType,
          viewCount: Math.floor(Math.random() * 10000) + 100, // Generate random view count
          isHot: Math.random() > 0.7, // 30% chance of being hot
          thumbnail: '', // No thumbnail in current data
          duration: tutorial.type === 'video' ? Math.floor(Math.random() * 300) + 60 : undefined, // Random duration for videos
          description: `${tutorial.title} - ${tutorial.platform}平台${tutorial.type}内容`,
          level: ['beginner', 'intermediate', 'advanced'][Math.floor(Math.random() * 3)] as 'beginner' | 'intermediate' | 'advanced'
        }));

        setTutorials(transformedTutorials);
      } catch (err) {
        console.error('Error loading tutorials:', err);
        setError(err instanceof Error ? err.message : 'Failed to load tutorials');
      } finally {
        setLoading(false);
      }
    };

    loadTutorials();
  }, []);

  const formatDuration = (seconds?: number) => {
    if (!seconds) return '';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // 移除未使用的函数以修复TypeScript错误

  const getPlayUrl = (tutorial: Tutorial) => {
    // 如果是抖音平台，转换URL格式
    if (tutorial.platform === 'douyin') {
      // 提取URL中的数字ID（长度大于12位的数字）
      const videoIdMatch = tutorial.url.match(/(\d{13,})/);
      if (videoIdMatch && videoIdMatch[1]) {
        const videoId = videoIdMatch[1];
        return `https://open.douyin.com/player/video?vid=${videoId}&autoplay=0`;
      }
    }
    // 其他平台直接返回原URL
    return tutorial.url;
  };

  const handleTutorialClick = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedTutorial(null);
  };

  // 添加键盘事件监听
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showVideoModal) {
        closeVideoModal();
      }
    };

    if (showVideoModal) {
      document.addEventListener('keydown', handleKeyDown);
      // 防止背景滚动
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showVideoModal]);

  // 移除未使用的getTypeIcon函数

  if (loading) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">正在加载本地教程数据...</p>
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
            <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">数据加载错误</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              无法加载教程数据: {error}
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-6 text-left max-w-2xl mx-auto">
              <h3 className="font-semibold mb-2">请检查:</h3>
              <ul className="text-sm space-y-1">
                <li>• 数据文件是否存在</li>
                <li>• 数据格式是否正确</li>
                <li>• 浏览器是否支持本地文件访问</li>
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
          <h1 className="text-4xl font-bold mb-4">教程媒体库</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            浏览我们的教程视频、音频和图片资源
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
              数据来源: 本地文件 (media_api.json)
            </span>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-primary-600">{tutorials.filter(t => t.type === 'video').length}</div>
            <div className="text-gray-600 dark:text-gray-300">视频教程</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-primary-600">{tutorials.filter(t => t.type === 'audio').length}</div>
            <div className="text-gray-600 dark:text-gray-300">音频教程</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-primary-600">{tutorials.filter(t => t.type === 'image').length}</div>
            <div className="text-gray-600 dark:text-gray-300">图片教程</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
            <div className="text-2xl font-bold text-primary-600">{tutorials.reduce((sum, t) => sum + (t.viewCount || 0), 0).toLocaleString()}</div>
            <div className="text-gray-600 dark:text-gray-300">总观看次数</div>
          </div>
        </div>

        {/* 教程列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map(tutorial => (
            <div
              key={tutorial.id}
              onClick={() => handleTutorialClick(tutorial)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
            >
              {/* 缩略图区域 */}
              <div className="h-40 bg-gray-200 dark:bg-gray-700 relative flex items-center justify-center">
                {tutorial.thumbnail && tutorial.thumbnail !== 'https://via.placeholder.com/300x200?text=No+Image' ? (
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<div class="text-gray-400 dark:text-gray-500 text-sm">无图片</div>';
                    }}
                  />
                ) : (
                  <div className="text-gray-400 dark:text-gray-500 text-sm">无图片</div>
                )}

                {/* 类型标签 */}
                <div className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-medium">
                  {tutorial.type === 'video' ? '视频' : tutorial.type === 'audio' ? '音频' : '图片'}
                </div>

                {/* 热门标签 */}
                {tutorial.isHot && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    热门
                  </div>
                )}
              </div>

              {/* 内容区域 */}
              <div className="p-6">
                {/* 标题 */}
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {tutorial.title}
                </h3>

                {/* 描述 */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {tutorial.description}
                </p>

                {/* 平台和观看次数 */}
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {tutorial.platform}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    {(tutorial.viewCount || 0).toLocaleString()}次观看
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态 */}
        {tutorials.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">暂无教程</h3>
            <p className="text-gray-600 dark:text-gray-300">请稍后再来查看更多教程内容</p>
          </div>
        )}

        {/* 视频播放弹窗 */}
        {showVideoModal && selectedTutorial && (
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
                <h3 className="text-sm sm:text-base font-medium truncate pr-4">{selectedTutorial.title}</h3>
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
                    src={getPlayUrl(selectedTutorial)}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={selectedTutorial.title}
                  />
                </div>
              </div>

              {/* 视频信息 - 可折叠的底部区域 */}
              <div className="bg-gray-900 text-white p-3 max-h-24 overflow-y-auto">
                <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300">
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                    {selectedTutorial.platform}
                  </span>
                  <span>{(selectedTutorial.viewCount || 0).toLocaleString()}次观看</span>
                  {selectedTutorial.duration && (
                    <span>{formatDuration(selectedTutorial.duration)}</span>
                  )}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 line-clamp-2">
                  {selectedTutorial.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TutorialsPage;
