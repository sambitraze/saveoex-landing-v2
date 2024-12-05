export default function DownloadSection() {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Left Side: Text and Buttons */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Download Appline Now & <br />
              Get started for free.
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lacus risus, molestie id condimentum ut, semper vitae.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-3 3v-6m5 0H9.59L12 6.59M5 18h14M5 6h14M5 6v12m14-12v12"
                  />
                </svg>
                Get it on Google Play
              </a>
              <a
                href="#"
                className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v12m9-9l-9 9-9-9"
                  />
                </svg>
                Download from App Store
              </a>
            </div>
          </div>
  
          {/* Right Side: Image */}
          <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="absolute -top-6 -left-10 bg-pink-100 rounded-full w-48 h-48"></div>
            <img
              src="/phone-download.png"
              alt="Download App"
              className="relative z-10 mx-auto w-64 sm:w-80 lg:w-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  