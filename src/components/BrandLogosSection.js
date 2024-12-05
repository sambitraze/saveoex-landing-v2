export default function BrandLogosSection() {
    const brands = [
      { name: "Logitech", logo: "/brands/logitech.png" },
      { name: "Dropcam", logo: "/brands/dropcam.png" },
      { name: "AMD", logo: "/brands/amd.png" },
      { name: "Nike", logo: "/brands/nike.png" },
      { name: "Mandiri", logo: "/brands/mandiri.png" },
      { name: "Amazon", logo: "/brands/amazon.png" },
    ];
  
    return (
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 sm:h-16"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  