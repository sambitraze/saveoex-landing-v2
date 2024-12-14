export default function DownloadSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:space-x-16">
        {/* Left Side: Text and Buttons */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Download Saveoex & <br />
            Get started for free.
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Say goodbye to overspending!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.saveoex.saveoex"
              target="_blank"
              className="flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              <img src="/playstore.png" className="w-6 h-auto mr-2" />
              Get it on Google Play
            </a>
            <a
              href="#"
              className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
            >
              <img src="/appstore.png" className="w-6 h-auto mr-2" />
              Download from App Store
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
          <div className="absolute -top-6 -left-10 bg-secondary rounded-full w-48 h-48"></div>
          <div className="flex flex-col md:flex-row">
            <img
              src="/app.png"
              alt="Download App"
              className="relative z-10 w-64"
            />
            <img
              src="/and.png"
              alt="Download App"
              className="relative z-10 w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
