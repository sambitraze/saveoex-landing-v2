export default function HowItWorksSection() {
  const steps = [
    {
      title: "Install the App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v5m0 0H8m4 0h4M12 9v3m0 0v3m0-3H8m4 0h4m2 8a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Setup your profile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5.121 17.804A12.063 12.063 0 0112 15c2.485 0 4.778.735 6.879 1.804m-4.379-4.804a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Enjoy the features!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
      icon: (
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V10z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How it Works?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-primary rounded-full mx-auto">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
