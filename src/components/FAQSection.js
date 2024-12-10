"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Saveoex?",
      answer:
        "Saveoex is a subscription-based platform that offers unlimited savings on local and national brands. For a low monthly fee, you can access exclusive discounts and deals .",
    },
    {
      question: "How do I use Saveoex?",
      answer:
        "Simply sign up for a subscription, explore our list of participating businesses, and show your Saveoex pass to enjoy instant savings .",
    },
    {
      question: "Where can I use Saveoex?",
      answer:
        "Saveoex partners with a wide range of businesses, from local stores to national chains, ensuring that you always have access to great deals, no matter where you are .",
    },
    {
      question: "How much does Saveoex cost?",
      answer:
        "We offer several affordable subscription plans to fit your budget. Visit our pricing page for more details .",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription at any time. We want you to enjoy the benefits of Saveoex with total flexibility .",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Any Questions? Answered
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to contact us for any other questions.
          </p>
        </div>

        <div className="mt-12 space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
              >
                <span className="text-gray-800 font-medium">
                  {faq.question}
                </span>
                <span className="text-gray-600">
                  {activeIndex === index ? (
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
