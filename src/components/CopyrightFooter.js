export default function CopyrightFooter() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Copyright Text */}
        <p className="text-sm">© 2025 Saveoex. All rights reserved.</p>

        {/* Center Section: Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-gray-300">
            <i className="fab fa-behance"></i>
          </a>
        </div>

        {/* Right Section: Privacy and Terms Links */}
        <div className="flex space-x-4 mt-4 md:mt-0 ">
          <a href="#" className="text-sm text-white  hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-white  hover:text-gray-300">
            Terms and conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
