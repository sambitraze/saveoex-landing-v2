export default function HeroSection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center lg:space-x-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-xl uppercase font-bold text-primary">
            Save your expenses!
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            India&apos;s First Guaranteed
            <br />
            <span className="text-secondary">Discount App</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Unlock Endless Savings with Saveoex! Starting at just ₹ 9 per month.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#download"
              className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:bg-secondary transition"
            >
              Download Now
            </a>
            <a
              href="https://youtu.be/ZCk8xHbrNqU"
              target="_blank"
              className="flex items-center text-gray-900 hover:text-secondary gap-4 border-dotted border-2 px-3 py-1 rounded-lg"
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
              <div>
                <span className="text-sm font-semibold">Watch Demo</span>
                <p className="text-xs text-gray-500">See how it works</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="absolute top-0 left-1/3 bg-primary rounded-full w-80 h-80 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <img src="hero.png" alt="Hero Phone" className="relative z-10 w-72" />
        </div>
      </div>
    </section>
  );
}
