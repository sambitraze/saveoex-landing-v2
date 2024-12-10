export default function ContactUsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Let&apos;s Stay Connected
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Send us a Message
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Company */}
              {/* <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Company (optional)"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div> */}

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your Phone Number"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Text Area */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Tell us about yourself
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us about yourself"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              {/* <p className="text-sm text-gray-500">
                By clicking contact us button, you agree our terms and policy.
              </p> */}
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
