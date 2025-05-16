import { useState } from 'react';

function TutorialsPage() {
  const categories = [
    "All",
    "Getting Started",
    "Software Setup",
    "Hardware Setup",
    "Stream Optimization",
    "Content Creation",
    "Advanced Techniques"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const tutorials = [
    {
      id: 1,
      title: "Getting Started with StreamAssist",
      description: "Learn the basics of setting up StreamAssist for your first stream.",
      category: "Getting Started",
      duration: "15 min",
      level: "Beginner",
      thumbnail: "https://via.placeholder.com/300x200",
      featured: true
    },
    {
      id: 2,
      title: "Optimizing Stream Settings for Quality",
      description: "Find the perfect balance between stream quality and performance.",
      category: "Stream Optimization",
      duration: "22 min",
      level: "Intermediate",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 3,
      title: "Setting Up Multiple Cameras",
      description: "Create a professional multi-camera setup for your streams.",
      category: "Hardware Setup",
      duration: "18 min",
      level: "Intermediate",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 4,
      title: "Creating Custom Overlays",
      description: "Design unique overlays that match your brand and style.",
      category: "Content Creation",
      duration: "30 min",
      level: "Intermediate",
      thumbnail: "https://via.placeholder.com/300x200",
      featured: true
    },
    {
      id: 5,
      title: "Advanced Audio Configuration",
      description: "Perfect your stream's audio with advanced mixing and processing.",
      category: "Advanced Techniques",
      duration: "25 min",
      level: "Advanced",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 6,
      title: "Installing StreamAssist Plugins",
      description: "Extend StreamAssist's functionality with powerful plugins.",
      category: "Software Setup",
      duration: "12 min",
      level: "Beginner",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 7,
      title: "Setting Up Stream Alerts",
      description: "Configure engaging alerts for subscribers and donations.",
      category: "Software Setup",
      duration: "20 min",
      level: "Beginner",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      id: 8,
      title: "Optimizing Your Lighting Setup",
      description: "Create the perfect lighting for a professional-looking stream.",
      category: "Hardware Setup",
      duration: "15 min",
      level: "Intermediate",
      thumbnail: "https://via.placeholder.com/300x200"
    }
  ];

  const filteredTutorials = activeCategory === "All" 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === activeCategory);

  const featuredTutorials = tutorials.filter(tutorial => tutorial.featured);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Streaming Tutorials</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn how to set up, optimize, and enhance your streams with our comprehensive tutorials.
          </p>
        </div>

        {/* Featured Tutorials */}
        {featuredTutorials.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Tutorials</h2>
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
                      <button className="btn btn-primary w-full">Watch Tutorial</button>
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
                    tutorial.level === 'Beginner' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : tutorial.level === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {tutorial.level}
                  </span>
                  <button className="btn btn-primary flex-grow">Watch Tutorial</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Request Tutorial */}
        <div className="mt-16 bg-primary-50 dark:bg-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Request a tutorial on a specific topic and our team will create it for you.
          </p>
          <button className="btn btn-primary px-6 py-3">Request a Tutorial</button>
        </div>
      </div>
    </div>
  );
}

export default TutorialsPage;
