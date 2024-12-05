export default function Footer() {
  const footerLinks = [
    {
      title: "Home",
      links: ["Product", "Pricing", "Business", "Enterprise"],
    },
    {
      title: "About Us",
      links: ["Company", "Leadership", "Careers", "Diversity"],
    },
    {
      title: "Resources",
      links: ["Andy Guide", "Forum", "Support", "App Directory"],
    },
    {
      title: "Tutorial",
      links: [
        "10 Leadership Styles",
        "Executive Summary Tips",
        "Prevent Team Burnout",
        "What are OKRs?",
      ],
    },
  ];

  return (
    <footer className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h2 className="flex items-center text-2xl font-bold text-gray-800">
              <img
                src="/logo.png"
                alt="Appline Logo"
                className="w-8 h-8 mr-2"
              />
              Appline
            </h2>
            <p className="mt-4 text-gray-600 max-w-sm">
              This membership will help you plan and execute a variety of
              projects.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
