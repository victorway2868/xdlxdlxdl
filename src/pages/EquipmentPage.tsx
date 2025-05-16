import { useState } from 'react';

function EquipmentPage() {
  const categories = [
    "All",
    "Cameras",
    "Microphones",
    "Lighting",
    "Capture Cards",
    "Audio Mixers",
    "Accessories"
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const equipment = [
    {
      id: 1,
      name: "StreamCam Pro 4K",
      description: "Professional 4K webcam with 60fps capability and excellent low-light performance.",
      category: "Cameras",
      price: "$149.99",
      rating: 4.8,
      image: "https://via.placeholder.com/300x300",
      features: [
        "4K resolution at 30fps",
        "1080p at 60fps",
        "Autofocus with face tracking",
        "Built-in privacy shutter",
        "Adjustable field of view"
      ],
      recommended: true
    },
    {
      id: 2,
      name: "AudioMaster USB Microphone",
      description: "Studio-quality condenser microphone with USB connectivity for easy setup.",
      category: "Microphones",
      price: "$129.99",
      rating: 4.7,
      image: "https://via.placeholder.com/300x300",
      features: [
        "Cardioid polar pattern",
        "24-bit/96kHz sampling",
        "Zero-latency monitoring",
        "Gain control knob",
        "Sturdy metal construction"
      ],
      recommended: true
    },
    {
      id: 3,
      name: "RingLight Pro",
      description: "18-inch LED ring light with adjustable color temperature and brightness.",
      category: "Lighting",
      price: "$89.99",
      rating: 4.5,
      image: "https://via.placeholder.com/300x300",
      features: [
        "3200K-5600K color temperature",
        "Dimmable 0-100%",
        "Smartphone holder",
        "Remote control",
        "Stable tripod stand"
      ]
    },
    {
      id: 4,
      name: "StreamCapture 4K",
      description: "High-performance capture card for recording gameplay at 4K resolution.",
      category: "Capture Cards",
      price: "$199.99",
      rating: 4.6,
      image: "https://via.placeholder.com/300x300",
      features: [
        "4K60 HDR capture",
        "USB 3.0 connectivity",
        "Ultra-low latency",
        "Compatible with all major streaming software",
        "Plug and play setup"
      ],
      recommended: true
    },
    {
      id: 5,
      name: "AudioMix 4-Channel",
      description: "Compact 4-channel audio mixer with USB interface for streaming.",
      category: "Audio Mixers",
      price: "$159.99",
      rating: 4.4,
      image: "https://via.placeholder.com/300x300",
      features: [
        "4 input channels",
        "3-band EQ per channel",
        "USB audio interface",
        "Headphone output with volume control",
        "Phantom power for condenser mics"
      ]
    },
    {
      id: 6,
      name: "StreamDeck Mini",
      description: "Programmable control pad with 6 customizable LCD keys for stream control.",
      category: "Accessories",
      price: "$79.99",
      rating: 4.9,
      image: "https://via.placeholder.com/300x300",
      features: [
        "6 customizable LCD keys",
        "One-touch actions",
        "Integration with major streaming platforms",
        "Compact design",
        "Adjustable stand"
      ]
    },
    {
      id: 7,
      name: "BudgetCam 1080p",
      description: "Affordable 1080p webcam perfect for beginners.",
      category: "Cameras",
      price: "$49.99",
      rating: 4.2,
      image: "https://via.placeholder.com/300x300",
      features: [
        "1080p at 30fps",
        "Auto light correction",
        "Built-in microphone",
        "Universal clip mount",
        "Plug and play USB"
      ]
    },
    {
      id: 8,
      name: "VoicePro Dynamic Mic",
      description: "Professional dynamic microphone with XLR connection for superior audio quality.",
      category: "Microphones",
      price: "$149.99",
      rating: 4.8,
      image: "https://via.placeholder.com/300x300",
      features: [
        "Dynamic cardioid pattern",
        "XLR connection",
        "Internal pop filter",
        "Shock mount included",
        "All-metal construction"
      ]
    }
  ];

  const filteredEquipment = activeCategory === "All" 
    ? equipment 
    : equipment.filter(item => item.category === activeCategory);

  const recommendedEquipment = equipment.filter(item => item.recommended);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Recommended Streaming Equipment</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find the best cameras, microphones, lighting, and accessories to create a professional streaming setup.
          </p>
        </div>

        {/* Recommended Equipment */}
        {recommendedEquipment.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Top Recommended Gear</h2>
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
                      <button className="btn btn-primary w-full">View Details</button>
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
                
                <h4 className="font-semibold mb-2">Key Features:</h4>
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
                  <button className="btn btn-primary w-full">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Setup Guide */}
        <div className="mt-16 bg-primary-50 dark:bg-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Setting Up Your Equipment?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Check out our detailed setup guides and tutorials to get the most out of your streaming gear.
          </p>
          <a href="/tutorials" className="btn btn-primary px-6 py-3 inline-block">View Setup Guides</a>
        </div>
      </div>
    </div>
  );
}

export default EquipmentPage;
