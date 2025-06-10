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

interface OBSPlatformInfo {
  downloadUrl: string;
  fileName: string;
  fileSize: string;
  systemName: string;
  fallbackUrl?: string;
  available: boolean;
}

interface OBSInfo {
  version: string;
  productName: string;
  releaseDate: string;
  description: string;
  platforms: {
    windows: OBSPlatformInfo;
    macosApple: OBSPlatformInfo;
    macosIntel: OBSPlatformInfo;
    linux: OBSPlatformInfo;
  };
}

type OSType = 'windows' | 'macos' | 'linux' | 'unknown';
type MacArchType = 'apple' | 'intel' | 'unknown';

function DownloadsPage() {
  const [softwareInfo, setSoftwareInfo] = useState<SoftwareInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [detectedOS, setDetectedOS] = useState<OSType>('unknown');
  const [detectedMacArch, setDetectedMacArch] = useState<MacArchType>('unknown');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [downloadError, setDownloadError] = useState<string | null>(null);

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

  // 系统检测函数
  const detectOS = (): OSType => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) return 'windows';
    if (userAgent.includes('mac')) return 'macos';
    if (userAgent.includes('linux') || userAgent.includes('x11')) return 'linux';
    return 'unknown';
  };

  const detectMacArchitecture = (): MacArchType => {
    // 检测Apple Silicon Mac
    if (navigator.userAgent.includes('Mac') && navigator.platform === 'MacIntel') {
      // 更精确的检测方法
      try {
        // 检查是否支持WebGL2，Apple Silicon通常有更好的GPU支持
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2');
        if (gl) {
          const renderer = gl.getParameter(gl.RENDERER);
          if (renderer && renderer.includes('Apple')) {
            return 'apple';
          }
        }
      } catch (e) {
        // 忽略错误，使用默认检测
      }

      // 备用检测：检查CPU核心数（Apple Silicon通常有更多核心）
      if (navigator.hardwareConcurrency >= 8) {
        return 'apple';
      }
    }
    return 'intel'; // 默认为Intel
  };

  // OBS Studio 信息（从清华大学镜像站获取，带备用链接）
  const obsInfo: OBSInfo = {
    version: "31.0.3",
    productName: "OBS Studio",
    releaseDate: "2025-03-28T20:35:41.000Z",
    description: "免费开源的直播和录制软件，支持多平台直播推流和本地录制。",
    platforms: {
      windows: {
        downloadUrl: "https://mirrors.tuna.tsinghua.edu.cn/github-release/obsproject/obs-studio/LatestRelease/OBS-Studio-31.0.3-Windows-Installer.exe",
        fallbackUrl: "https://github.com/obsproject/obs-studio/releases/download/31.0.3/OBS-Studio-31.0.3-Windows-Installer.exe",
        fileName: "OBS-Studio-31.0.3-Windows-Installer.exe",
        fileSize: "149.0 MB",
        systemName: "Windows",
        available: true
      },
      macosApple: {
        downloadUrl: "https://mirrors.tuna.tsinghua.edu.cn/github-release/obsproject/obs-studio/LatestRelease/OBS-Studio-31.0.3-macOS-Apple.dmg",
        fallbackUrl: "https://github.com/obsproject/obs-studio/releases/download/31.0.3/OBS-Studio-31.0.3-macOS-Apple.dmg",
        fileName: "OBS-Studio-31.0.3-macOS-Apple.dmg",
        fileSize: "177.4 MB",
        systemName: "macOS (Apple Silicon)",
        available: true
      },
      macosIntel: {
        downloadUrl: "https://mirrors.tuna.tsinghua.edu.cn/github-release/obsproject/obs-studio/LatestRelease/OBS-Studio-31.0.3-macOS-Intel.dmg",
        fallbackUrl: "https://github.com/obsproject/obs-studio/releases/download/31.0.3/OBS-Studio-31.0.3-macOS-Intel.dmg",
        fileName: "OBS-Studio-31.0.3-macOS-Intel.dmg",
        fileSize: "186.8 MB",
        systemName: "macOS (Intel)",
        available: true
      },
      linux: {
        downloadUrl: "https://mirrors.tuna.tsinghua.edu.cn/github-release/obsproject/obs-studio/LatestRelease/OBS-Studio-31.0.3-Ubuntu-24.04-x86_64.deb",
        fallbackUrl: "https://github.com/obsproject/obs-studio/releases/download/31.0.3/OBS-Studio-31.0.3-Ubuntu-24.04-x86_64.deb",
        fileName: "OBS-Studio-31.0.3-Ubuntu-24.04-x86_64.deb",
        fileSize: "127.9 MB",
        systemName: "Ubuntu/Linux",
        available: true
      }
    }
  };

  // 获取当前选择的平台信息
  const getCurrentPlatformInfo = (): OBSPlatformInfo => {
    if (selectedPlatform) {
      return obsInfo.platforms[selectedPlatform as keyof typeof obsInfo.platforms];
    }

    // 自动选择平台
    if (detectedOS === 'windows') {
      return obsInfo.platforms.windows;
    } else if (detectedOS === 'macos') {
      if (detectedMacArch === 'apple') {
        return obsInfo.platforms.macosApple;
      } else {
        return obsInfo.platforms.macosIntel;
      }
    } else if (detectedOS === 'linux') {
      return obsInfo.platforms.linux;
    }

    // 默认返回Windows版本
    return obsInfo.platforms.windows;
  };

  useEffect(() => {
    // 检测操作系统
    const os = detectOS();
    const macArch = os === 'macos' ? detectMacArchitecture() : 'unknown';

    setDetectedOS(os);
    setDetectedMacArch(macArch);

    // 设置默认选择的平台
    if (os === 'windows') {
      setSelectedPlatform('windows');
    } else if (os === 'macos') {
      setSelectedPlatform(macArch === 'apple' ? 'macosApple' : 'macosIntel');
    } else if (os === 'linux') {
      setSelectedPlatform('linux');
    } else {
      setSelectedPlatform('windows'); // 默认
    }
  }, []);

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
      try {
        // 使用软件真实下载地址
        const downloadUrl = `https://xiaodouliupdates.wzyclouds.dpdns.org/${softwareInfo.fileName}`;

        // 创建隐藏的下载链接
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = softwareInfo.fileName;
        link.style.display = 'none';

        // 添加到DOM，触发下载，然后移除
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('下载失败:', error);
        // 如果直接下载失败，回退到打开新窗口
        const downloadUrl = `https://xiaodouliupdates.wzyclouds.dpdns.org/${softwareInfo.fileName}`;
        window.open(downloadUrl, '_blank');
      }
    }
  };

  const handleOBSDownload = () => {
    const platformInfo = getCurrentPlatformInfo();

    if (!platformInfo.available) {
      setDownloadError('该平台版本暂时不可用，请选择其他平台或稍后重试。');
      return;
    }

    setDownloadError(null);

    try {
      // 创建隐藏的下载链接
      const link = document.createElement('a');
      link.href = platformInfo.downloadUrl;
      link.download = platformInfo.fileName;
      link.style.display = 'none';

      // 添加到DOM，触发下载，然后移除
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('下载失败:', error);
      // 如果直接下载失败，回退到打开新窗口
      window.open(platformInfo.downloadUrl, '_blank');
    }
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform);
    setDownloadError(null); // 清除之前的错误信息
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
          {/* 小斗笠直播助手 */}
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

          {/* OBS Studio */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{obsInfo.productName}</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {obsInfo.description}
                  </p>
                  {detectedOS !== 'unknown' && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      🔍 检测到您的系统: {getCurrentPlatformInfo().systemName}
                    </p>
                  )}
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={handleOBSDownload}
                    disabled={!getCurrentPlatformInfo().available}
                    className={`btn px-6 py-3 ${
                      getCurrentPlatformInfo().available
                        ? 'btn-primary'
                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    }`}
                  >
                    {getCurrentPlatformInfo().available
                      ? `下载 ${getCurrentPlatformInfo().systemName}`
                      : '暂不可用'
                    }
                  </button>
                </div>
              </div>

              {/* 平台选择器 */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">选择您的操作系统:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <button
                    onClick={() => handlePlatformChange('windows')}
                    disabled={!obsInfo.platforms.windows.available}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      !obsInfo.platforms.windows.available
                        ? 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:border-gray-500 dark:text-gray-500'
                        : selectedPlatform === 'windows'
                        ? 'bg-primary-100 border-primary-500 text-primary-700 dark:bg-primary-900 dark:border-primary-400 dark:text-primary-300'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    🪟 Windows
                  </button>
                  <button
                    onClick={() => handlePlatformChange('macosApple')}
                    disabled={!obsInfo.platforms.macosApple.available}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      !obsInfo.platforms.macosApple.available
                        ? 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:border-gray-500 dark:text-gray-500'
                        : selectedPlatform === 'macosApple'
                        ? 'bg-primary-100 border-primary-500 text-primary-700 dark:bg-primary-900 dark:border-primary-400 dark:text-primary-300'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    🍎 macOS (M1/M2)
                  </button>
                  <button
                    onClick={() => handlePlatformChange('macosIntel')}
                    disabled={!obsInfo.platforms.macosIntel.available}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      !obsInfo.platforms.macosIntel.available
                        ? 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:border-gray-500 dark:text-gray-500'
                        : selectedPlatform === 'macosIntel'
                        ? 'bg-primary-100 border-primary-500 text-primary-700 dark:bg-primary-900 dark:border-primary-400 dark:text-primary-300'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    🍎 macOS (Intel)
                  </button>
                  <button
                    onClick={() => handlePlatformChange('linux')}
                    disabled={!obsInfo.platforms.linux.available}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      !obsInfo.platforms.linux.available
                        ? 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed dark:bg-gray-600 dark:border-gray-500 dark:text-gray-500'
                        : selectedPlatform === 'linux'
                        ? 'bg-primary-100 border-primary-500 text-primary-700 dark:bg-primary-900 dark:border-primary-400 dark:text-primary-300'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    🐧 Ubuntu/Linux
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">版本: {obsInfo.version}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">大小: {getCurrentPlatformInfo().fileSize}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">系统: {getCurrentPlatformInfo().systemName}</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">
                    发布时间: {new Date(obsInfo.releaseDate).toLocaleDateString('zh-CN')}
                  </span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">文件: {getCurrentPlatformInfo().fileName}</span>
                </div>
              </div>

              {/* 错误提示 */}
              {downloadError && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-red-800 dark:text-red-200">{downloadError}</span>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-3">主要功能:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>多平台直播推流</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>高质量视频录制</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>场景和源管理</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>音频混合器</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>实时视频/音频捕获</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>插件和滤镜支持</span>
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
