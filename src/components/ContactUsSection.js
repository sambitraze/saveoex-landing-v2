"use client";

import { useState } from "react";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.saveoex.com/items/contact_tickets",
        {
          // Replace with your API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 5BSuJ6AZwyrIh27p6dV0fsXjfaYhV1gZ`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setNotification({
        message: "Message sent successfully!",
        type: "success",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setNotification({
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification({ message: "", type: "" }), 3000); // Clear notification after 3 seconds
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      {/* Notification */}
      {notification.message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}

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
          <form onSubmit={handleSubmit}>
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
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
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
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your Phone Number"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
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
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-4 px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Contact Us"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
