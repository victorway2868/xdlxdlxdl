function DownloadsPage() {
  const tools = [
    {
      id: 1,
      name: "StreamAssist Core",
      description: "The main streaming assistant application with overlay management, chat integration, and stream analytics.",
      version: "2.5.1",
      size: "45 MB",
      os: ["Windows", "macOS", "Linux"],
      features: [
        "Real-time stream analytics",
        "Custom overlay management",
        "Multi-platform chat integration",
        "Automated alerts and notifications",
        "Stream scheduling and reminders"
      ]
    },
    {
      id: 2,
      name: "StreamAssist Overlay Pack",
      description: "A collection of professionally designed overlays, alerts, and transitions for your stream.",
      version: "1.8.0",
      size: "120 MB",
      os: ["Windows", "macOS"],
      features: [
        "50+ customizable overlay templates",
        "Animated transitions and alerts",
        "Stream starting/ending screens",
        "Social media integration panels",
        "Subscriber and donation alerts"
      ]
    },
    {
      id: 3,
      name: "StreamAssist Audio Enhancer",
      description: "Advanced audio processing tools to improve your stream's sound quality.",
      version: "3.2.0",
      size: "28 MB",
      os: ["Windows", "macOS"],
      features: [
        "Noise suppression and echo cancellation",
        "Voice equalization and enhancement",
        "Audio ducking for music during speech",
        "Multi-source audio mixing",
        "Sound effect library and triggers"
      ]
    },
    {
      id: 4,
      name: "StreamAssist Scene Switcher",
      description: "Intelligent scene switching based on game events, chat commands, or scheduled timers.",
      version: "1.4.2",
      size: "18 MB",
      os: ["Windows"],
      features: [
        "Game event detection and scene switching",
        "Chat command scene control",
        "Timed scene rotation",
        "Hotkey configuration",
        "Integration with StreamAssist Core"
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Download Streaming Tools</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Enhance your streaming experience with our professional-grade tools designed for streamers of all levels.
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
                    <button className="btn btn-primary px-6 py-3">Download Now</button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Version: {tool.version}</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Size: {tool.size}</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">OS: {tool.os.join(", ")}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
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
          <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Check out our detailed tutorials on how to install and configure these tools for the best streaming experience.
          </p>
          <a href="/tutorials" className="btn btn-primary px-6 py-3 inline-block">View Tutorials</a>
        </div>
      </div>
    </div>
  );
}

export default DownloadsPage;
