function DebugPage() {
  const commonIssues = [
    {
      id: 1,
      title: "Stream Lag and Frame Drops",
      description: "Experiencing stuttering, buffering, or dropped frames during your stream.",
      solutions: [
        "Check your internet upload speed (minimum 5 Mbps recommended)",
        "Lower your video bitrate in your streaming software",
        "Reduce your output resolution (try 720p at 30fps)",
        "Close unnecessary applications running in the background",
        "Use a wired ethernet connection instead of Wi-Fi"
      ]
    },
    {
      id: 2,
      title: "Audio Issues",
      description: "Problems with microphone quality, echo, background noise, or audio sync.",
      solutions: [
        "Check microphone connections and settings in your streaming software",
        "Use noise suppression filters to reduce background noise",
        "Add a slight delay to your webcam if audio is out of sync",
        "Use headphones to prevent echo from speakers",
        "Consider using a dedicated audio interface for better quality"
      ]
    },
    {
      id: 3,
      title: "CPU Overload",
      description: "High CPU usage causing performance issues during streaming.",
      solutions: [
        "Use hardware encoding (NVENC for NVIDIA, AMF for AMD) instead of x264",
        "Lower your encoding preset (faster instead of medium/slow)",
        "Reduce the number of active sources in your scenes",
        "Close resource-intensive applications while streaming",
        "Consider upgrading your CPU if issues persist"
      ]
    },
    {
      id: 4,
      title: "Webcam Not Working",
      description: "Camera not showing up in streaming software or poor quality video.",
      solutions: [
        "Check if the camera is being used by another application",
        "Update your webcam drivers",
        "Add video filters to improve image quality",
        "Ensure adequate lighting in your streaming area",
        "Try a different USB port or cable"
      ]
    }
  ];

  const services = [
    {
      id: 1,
      name: "Basic Stream Diagnostic",
      description: "A comprehensive analysis of your stream settings and performance issues.",
      price: "$49.99",
      features: [
        "Stream settings review",
        "Performance optimization recommendations",
        "Basic audio/video troubleshooting",
        "Written report with actionable steps",
        "Email support for 7 days"
      ]
    },
    {
      id: 2,
      name: "Advanced Technical Support",
      description: "In-depth technical assistance with remote access to resolve complex issues.",
      price: "$99.99",
      features: [
        "Remote session with a streaming technician",
        "Hardware and software configuration",
        "Advanced audio/video setup and optimization",
        "Custom scene and overlay configuration",
        "30 days of follow-up support"
      ]
    },
    {
      id: 3,
      name: "Premium Stream Overhaul",
      description: "Complete redesign and optimization of your streaming setup for maximum quality and performance.",
      price: "$199.99",
      features: [
        "Complete streaming setup audit and redesign",
        "Custom graphics and overlay creation",
        "Advanced scene transitions and effects",
        "Hardware recommendations and configuration",
        "3 months of priority technical support"
      ]
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Streaming Debug Service</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Resolve technical issues and optimize your stream with our professional debugging services.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Common Streaming Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonIssues.map(issue => (
              <div key={issue.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{issue.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{issue.description}</p>
                  
                  <h4 className="font-semibold mb-2">Quick Solutions:</h4>
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
          <h2 className="text-2xl font-bold mb-6">Stream Health Check</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Use our self-diagnostic tool to identify common streaming issues. Upload your stream logs or OBS settings for a quick analysis.
          </p>
          
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Upload Stream Logs
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Drag and drop files here, or click to select files
              </p>
              <input type="file" className="hidden" />
              <button className="mt-4 btn btn-primary">Upload Files</button>
            </div>
          </div>
          
          <button className="btn btn-primary w-full md:w-auto">Run Diagnostic</button>
        </div>

        {/* Professional Services */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Professional Debugging Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary-600 mb-4">{service.price}</p>
                  
                  <h4 className="font-semibold mb-2">Includes:</h4>
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
                    <button className="btn btn-primary w-full">Book Service</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-primary-50 dark:bg-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Contact our support team for urgent help with your streaming issues.
          </p>
          <a href="/contact" className="btn btn-primary px-6 py-3 inline-block">Contact Support</a>
        </div>
      </div>
    </div>
  );
}

export default DebugPage;
