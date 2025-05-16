import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Elevate Your Streaming Experience
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Professional tools, tutorials, and support for streamers of all levels
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/downloads" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg">
              Download Tools
            </Link>
            <Link to="/tutorials" className="btn bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-lg">
              View Tutorials
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Stream Like a Pro</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Streaming Tools</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Powerful software to enhance your stream quality, manage overlays, and engage with your audience.
              </p>
              <Link to="/downloads" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                Download Now
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Step-by-step guides to help you set up your stream, optimize settings, and create engaging content.
              </p>
              <Link to="/tutorials" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                Watch Tutorials
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipment Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Expert advice on the best cameras, microphones, lighting, and other gear for your streaming setup.
              </p>
              <Link to="/equipment" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                View Recommendations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Debugging Service</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional support to troubleshoot technical issues and optimize your streaming performance.
              </p>
              <Link to="/debug" className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center">
                Get Support
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Streamers Worldwide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Alex Johnson</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Gaming Streamer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "StreamAssist's tools have completely transformed my streams. The overlay manager is intuitive, and the audience engagement features have helped me grow my channel significantly."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Williams</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Art & Creative Streamer</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The equipment recommendations were spot on for my budget. I was able to set up a professional-looking stream without breaking the bank. The tutorials were incredibly helpful too!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Chen</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tech Educator</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "When I had issues with stream lag, the debugging service was a lifesaver. They identified the problem quickly and provided a solution that fixed everything. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Your Stream to the Next Level?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of streamers who have improved their content with StreamAssist
          </p>
          <Link to="/downloads" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
