"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    // {
    //   question: "What is Saveoex?",
    //   answer:
    //     "Saveoex is a subscription-based platform that offers unlimited savings on local and national brands. For a low monthly fee, you can access exclusive discounts and deals .",
    // },
    // {
    //   question: "How do I use Saveoex?",
    //   answer:
    //     "Simply sign up for a subscription, explore our list of participating businesses, and show your Saveoex pass to enjoy instant savings .",
    // },
    // {
    //   question: "Where can I use Saveoex?",
    //   answer:
    //     "Saveoex partners with a wide range of businesses, from local stores to national chains, ensuring that you always have access to great deals, no matter where you are .",
    // },
    // {
    //   question: "How much does Saveoex cost?",
    //   answer:
    //     "We offer several affordable subscription plans to fit your budget. Visit our pricing page for more details .",
    // },
    // {
    //   question: "Can I cancel my subscription?",
    //   answer:
    //     "Yes, you can cancel your subscription at any time. We want you to enjoy the benefits of Saveoex with total flexibility .",
    // },

    {
      question: "What is Saveoex?",
      answer:
        "Saveoex is your ultimate savings platform, offering guaranteed discounts at a variety of local and national partner vendors. Our goal is to help you save money on everyday essentials, luxurious products, and a wide range of services.",
    },
    {
      question: "How does Saveoex work?",
      answer:
        "Saveoex operates on a subscription model, starting at an affordable ₹9 per month. Once you're subscribed, you can access discounts at our partner vendors without any monthly limitations.",
    },
    {
      question: "Where can I use Saveoex?",
      answer:
        "You can use Saveoex at your favourite local spots like street food vendors, cafes, restaurants, pubs, fruit and vegetable shops, pharmacies, pet stores, and even luxury service providers and much more.",
    },
    {
      question: "Is there a minimum bill amount to avail discounts?",
      answer: "Yes, discounts are applicable on bills of ₹20 or more.",
    },
    {
      question: "Are there any restrictions on the maximum bill amount?",
      answer:
        "Nope, there are no restrictions on the maximum bill amount. Feel free to save big regardless of your bill amount.",
    },
    {
      question: "Can I use Saveoex for group bills?",
      answer:
        "Absolutely! Saveoex discounts apply to both single-person and group bills.",
    },
    {
      question: "How often can I use the discounts?",
      answer:
        "You can make use of the discounts every day during the operating hours of our partner vendors. Feel free to visit stores as many times as you'd like, without any restrictions on the number of visits within a day or month!",
    },
    {
      question: "Are the discounts available for dine-in and take-away?",
      answer:
        "Yes, the discounts are available for both dine-in and take-away options.",
    },
    {
      question: "How do I find partner vendors?",
      answer:
        "Easily discover partner vendors through our user-friendly app. The app will show you available discounts and vendors in your vicinity.",
    },
    {
      question: "Can I use Saveoex discounts nationwide?",
      answer:
        "Yes, you can use Saveoex discounts nationwide without any extra charges. Wherever you are, at home or on the go, access the discounts through our app.",
    },
    {
      question: "How do I subscribe to Saveoex?",
      answer:
        "Subscribe to Saveoex through our app. Simply pick the subscription plan that suits you best and start saving instantly.",
    },
    {
      question: "What subscription plans are available?",
      answer:
        "Our subscription plans start at just ₹9 per month. More details about other plans and benefits can be found on our app.",
    },
    {
      question: "How do I contact Saveoex for support?",
      answer:
        "You can reach out to our customer support team using the app, our website, social media platform, or by emailing [hello@saveoex.com]. We're here to help with any questions or issues you have.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you have the flexibility to cancel your subscription at any time through the app or by contacting our customer support.",
    },
    {
      question: "Are there any additional charges for using Saveoex?",
      answer:
        "No, there are no extra charges for using Saveoex once you've subscribed.",
    },
    {
      question: "What if I encounter issues with a partner vendor?",
      answer:
        "If you run into any problems with a partner vendor, please reach out to our customer support team. We'll work to resolve the issue promptly.",
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
            Any Questions?
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to contact us for any other questions.
          </p>
        </div>

        <div className="mt-12 space-y-2 max-w-3xl mx-auto gap-6 grid md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between gap-4 items-center px-6 py-4 focus:outline-none"
              >
                <span className="text-gray-800 font-medium text-left">
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
