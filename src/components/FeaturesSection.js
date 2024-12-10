export default function FeaturesSection() {
  const features = [
    {
      title: "Sign Up",
      description:
        "Choose a subscription plan that fits your lifestyle. With our affordable rates, saving has never been easier!",
      icon: "📱",
    },
    {
      title: "Explore Deals",
      description:
        "Discover discounts from local businesses and national brands. Our curated list ensures you always get the best offers.",
      icon: "🎨",
    },
    {
      title: "Start Saving",
      description:
        "Show your Saveoex pass at participating locations and enjoy instant savings. It’s that simple!",
      icon: "🔧",
    },
    {
      title: "Repeat & Enjoy",
      description:
        "With unlimited access to discounts, you can save every day, on everything you love.",
      icon: "🔗",
    },
    // {
    //   title: "Fully Customizable",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    //   icon: "⚙️",
    // },
    // {
    //   title: "Regular Free Updates",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    //   icon: "🔄",
    // },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How Saveoex Works
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Saveoex simplifies your savings journey with a seamless,
            user-friendly experience. Here’s how it works:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl bg-blue-100 text-primary w-16 h-16 flex items-center justify-center mx-auto rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
