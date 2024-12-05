export default function AudienceSection() {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Left Side: Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -top-6 -left-10 bg-blue-100 rounded-lg w-48 h-48"></div>
            <img
              src="/phone-audience.png"
              alt="Audience Tracking"
              className="relative z-10 mx-auto w-64 sm:w-80 lg:w-auto"
            />
          </div>
  
          {/* Right Side: Text and List */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-blue-500 font-semibold text-sm uppercase">
              Track Audience Activities
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Track Your Audience Activities
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              Schedule your posts for times when your audience is most active.
              Choose from our best-time predictions, or create your own publishing
              schedule.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-md text-gray-800 font-bold">
                  01
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Lorem ipsum dolor.
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ut ultricies lacus non fermentum ultrices.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-md text-gray-800 font-bold">
                  02
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Lorem ipsum dolor.
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ut ultricies lacus non fermentum ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  