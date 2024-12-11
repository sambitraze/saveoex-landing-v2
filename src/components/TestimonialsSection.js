export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Shreyansh",
      role: "Customer",
      rating: 5,
      feedback: `“Saveoexhas completely changed the way I shop! I'm saving money on everything, from my morning coffee to weekend getaways.”`,
      image: "/user1.jpg",
    },
    {
      name: "Anusha",
      role: "Customer",
      rating: 5,
      feedback: `“I love how easy it is to use. No hassle, just savings. Highly recommend!”`,
      image: "/user2.jpg",
    },
    {
      name: "Dhirendra",
      role: "Customer",
      rating: 5,
      feedback: `“The best part about Saveoex? The variety of deals! Whether I’m shopping locally or traveling, there’s always a discount waiting for me.”`,
      image: "/user3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our User&apos;s Say
          </h2>
          {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p> */}
        </div>

        <div className="mt-12 grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <p className="text-gray-600">{testimonial.feedback}</p>
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex items-center">
                  <span className="font-bold text-yellow-500">
                    {testimonial.rating}
                  </span>
                  <div className="flex ml-1 text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.464a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.39-2.464a1 1 0 00-1.175 0l-3.39 2.464c-.784.57-1.839-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.342 9.402c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.975z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
