export default function AppScreenshotsSection() {
    const screenshots = [
      {
        src: "/screenshot1.png",
        alt: "Log Symptoms",
        title: "Log Symptoms",
        description: "Keep notes on how you feel",
      },
      {
        src: "/screenshot2.png",
        alt: "Create Reports",
        title: "Create Reports",
        description: "Keep your doctor informed",
      },
      {
        src: "/screenshot3.png",
        alt: "Care Team",
        title: "Care Team",
        description: "Supporting you along the way",
      },
    ];
  
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              App Screenshots
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>
  
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-40 sm:w-52 md:w-60 lg:w-72 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm">{screenshot.description}</p>
              </div>
            ))}
          </div>
  
          {/* Optional Navigation Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <button className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  }
  