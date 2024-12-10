export default function BlogSection() {
  const blogs = [
    {
      title: "Laboris nisi aliquip dium exiulium commodo...",
      author: "Juhan",
      date: "Apr 28 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun",
      image: "/blog1.jpg",
      link: "#",
    },
    {
      title: "Quis nostrud exercitati ullamc laboris n...",
      author: "Juhan",
      date: "Apr 28 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun",
      image: "/blog2.jpg",
      link: "#",
    },
    {
      title: "Expenses as material bre mate insisted b...",
      author: "Juhan",
      date: "Apr 28 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nun",
      image: "/blog3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest News & Blogs
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                {/* Author and Date */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A12.063 12.063 0 0112 15c2.485 0 4.778.735 6.879 1.804M8.684 7.684A4 4 0 119.684 6.684M16.684 7.684A4 4 0 119.684 6.684"
                      ></path>
                    </svg>
                    {blog.author}
                  </div>
                  <span className="ml-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3h8v4M12 12v10m-7 0h14"
                      ></path>
                    </svg>
                    {blog.date}
                  </span>
                </div>

                {/* Blog Title */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                {/* Blog Description */}
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>

                {/* Read More Button */}
                <a
                  href={blog.link}
                  className="inline-block mt-4 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
