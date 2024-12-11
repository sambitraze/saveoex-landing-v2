"use client";

import { useState } from "react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: "1",
      unit_amount: 29,
      nickname: "1 Month",
      offers: [
        "All Vendor offers",
        "1 Month access",
        "Free updates",
        "1 Months support",
      ],
    },
    {
      id: "2",
      unit_amount: 69,
      nickname: "3 Months",
      offers: [
        "All Vendor offers",
        "3 Month access",
        "Free updates",
        "3 Months support",
      ],
    },
    {
      id: "3",
      unit_amount: 99,
      nickname: "6 Months",
      offers: [
        "All Vendor offers",
        "6 Month access",
        "Free updates",
        "6 Months support",
      ],
    },
    {
      id: "4",
      unit_amount: 199,
      nickname: "12 Months",
      offers: [
        "All Vendor offers",
        "12 Month access",
        "Free updates",
        "12 Months support",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Pricing Plans
          </h2>
          {/* <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            There are many variations of the subscription comming soon.
          </p> */}

          {/* Toggle Button */}
          {/* <div className="mt-6 flex justify-center items-center space-x-4">
            <span className="text-gray-700 font-medium">Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
            <span className="text-gray-700 font-medium">Yearly</span>
          </div> */}
        </div>

        <div className="mt-12 grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition ${
                plan.isPopular ? "border border-blue-500" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {plan.nickname}
              </h3>
              {plan.isPopular && (
                <span className="block text-sm text-primary font-medium mt-2">
                  Most popular
                </span>
              )}
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <div className="text-gray-900 font-bold text-4xl mt-4">
                ₹{plan.unit_amount}
                {/* ${isYearly ? plan.yearlyPrice : plan.monthlyPrice} */}
                {/* <span className="text-lg font-medium">
                  {" "}
                  / {isYearly ? "year" : "month"}
                </span> */}
              </div>
              <ul className="mt-6 space-y-2 text-gray-600">
                {plan.offers.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <button
                className={`mt-6 py-2 px-4 rounded-lg font-medium text-white ${
                  plan.isPopular
                    ? "bg-primary hover:bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-900"
                }`}
              >
                Choose Plan
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
