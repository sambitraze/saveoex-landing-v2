export default function HeroSection() {
    return (
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center lg:space-x-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-sm uppercase font-semibold text-blue-500">
              Crafted for App, Software, and SaaS Sites
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Next.js Template and <br />
              <span className="text-blue-500">SaaS Starter Kit Site.</span>
            </h1>
            <p className="text-gray-600 text-lg mt-4">
              Website template and starter kit crafted to build fully functional
              mobile app landing pages and software websites.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="#download"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Download Now
              </a>
              <a
                href="#demo"
                className="flex items-center space-x-2 text-gray-900 hover:text-blue-500"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-6.336-3.69A1 1 0 007 8.384v7.232a1 1 0 001.416.912l6.336-3.692a1 1 0 000-1.768z"
                  ></path>
                </svg>
                <span className="text-lg font-semibold">Watch Demo</span>
                <p className="text-sm text-gray-500">See how it works</p>
              </a>
            </div>
          </div>
  
          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="absolute top-0 left-1/3 bg-blue-100 rounded-full w-80 h-80 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <img
              src="/hero-image.png"
              alt="Hero Phone"
              className="relative z-10 w-72 sm:w-96"
            />
          </div>
        </div>
      </section>
    );
  }
  