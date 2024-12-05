export default function AudienceReportsSection() {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-blue-500 font-semibold text-sm uppercase">
              Create Audience Reports
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Know More About Your Audience.
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Schedule your posts for times when your audience is most active.
              Choose from our best-time predictions, or create your own publishing
              schedule.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Know More
              </a>
            </div>
          </div>
  
          {/* Right Side: Image */}
          <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="absolute -top-6 -left-10 bg-pink-100 rounded-lg w-48 h-48"></div>
            <img
              src="/phone-reports.png"
              alt="Audience Reports"
              className="relative z-10 mx-auto w-64 sm:w-80 lg:w-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  