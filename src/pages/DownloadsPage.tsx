import { useState, useEffect } from 'react';

interface SoftwareInfo {
  version?: string;
  productName?: string;
  releaseDate?: string;
  downloadUrl?: string;
  fileName?: string;
  fileSize?: string;
  sha512?: string;
}

function DownloadsPage() {
  const [softwareInfo, setSoftwareInfo] = useState<SoftwareInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 备用数据，当API无法访问时使用
  const fallbackData: SoftwareInfo = {
    version: "2.0.0",
    productName: "小斗笠直播助手",
    releaseDate: "2025-06-10T17:15:23.213Z",
    downloadUrl: "https://84794ee73142290fa69ac64ae8fc7bee.r2.cloudflarestorage.com/xiaodouliupdates/小斗笠直播助手-Setup-2.0.0.exe",
    fileName: "小斗笠直播助手-Setup-2.0.0.exe",
    fileSize: "200.13 MB",
    sha512: ""
  };

  useEffect(() => {
    const fetchSoftwareInfo = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://xiaodouliupdates.wzyclouds.dpdns.org/latest.yml', {
          method: 'GET',
          headers: {
            'accept': 'application/json, */*',
            'content-type': 'application/json',
          },
          mode: 'cors',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSoftwareInfo(data);
      } catch (err) {
        console.error('Error fetching software info:', err);
        console.log('Using fallback data due to API error');

        // 使用备用数据而不是显示错误
        setSoftwareInfo(fallbackData);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSoftwareInfo();
  }, []);

  const handleDownload = () => {
    if (softwareInfo?.fileName) {
      // 使用软件真实下载地址
      const downloadUrl = `https://xiaodouliupdates.wzyclouds.dpdns.org/${softwareInfo.fileName}`;
      window.open(downloadUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">正在加载软件信息...</p>
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
            <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
              <p className="font-bold">加载失败</p>
              <p>{error}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2"
            >
              🔄 重新加载
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
          <h1 className="text-4xl font-bold mb-4">下载直播软件</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            使用我们为各级别主播设计的专业级软件，提升您的直播体验。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{softwareInfo?.productName || '小斗笠直播助手'}</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    主要的直播助手应用程序，具有覆盖层管理、聊天集成和直播分析功能。
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={handleDownload}
                    disabled={!softwareInfo?.fileName}
                    className="btn btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    立即下载
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">版本: {softwareInfo?.version || '获取中...'}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">大小: {softwareInfo?.fileSize || '获取中...'}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">系统: Windows</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">
                    发布时间: {softwareInfo?.releaseDate
                      ? new Date(softwareInfo.releaseDate).toLocaleDateString('zh-CN')
                      : '获取中...'
                    }
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">主要功能:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>实时直播数据分析</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>自定义覆盖层管理</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>多平台聊天集成</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>自动化提醒和通知</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>直播计划和提醒功能</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadsPage;
