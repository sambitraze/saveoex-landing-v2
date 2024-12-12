"use client";

import { useState, useEffect } from "react";

export default function PricingSection() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'API_URL' with your actual API endpoint
    const fetchPlans = async () => {
      try {
        const response = await fetch(
          "https://api.saveoex.com/items/subscription_plans"
        ); // Replace with actual API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch plans");
        }
        const data = await response.json();
        console.log(data);
        setPlans(data.data || []); // Adjust according to your API response structure
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

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

        <div className="mt-12 grid gap-6 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <section className="py-16 bg-gradient-to-b from-white to-pink-50">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Loading Pricing Plans...
                  </h2>
                </div>
              </div>
            </section>
          ) : (
            plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white shadow-md rounded-lg p-6 text-center flex flex-col justify-between hover:shadow-lg transition ${
                  plan.has_clickbait ? "border border-blue-500" : ""
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {plan.title}
                </h3>
                <p
                  className="text-gray-600 mt-2"
                  dangerouslySetInnerHTML={{ __html: plan.description }}
                ></p>
                <div className="text-gray-900 font-bold text-4xl mt-4">
                  ₹{plan.price}
                  {/* ${isYearly ? plan.yearlyPrice : plan.monthlyPrice} */}
                  {/* <span className="text-lg font-medium">
                  {" "}
                  / {isYearly ? "year" : "month"}
                </span> */}
                </div>
                {/* <ul className="mt-6 space-y-2 text-gray-600">
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
                </ul> */}
                {/* <button
                className={`mt-6 py-2 px-4 rounded-lg font-medium text-white ${
                  plan.isPopular
                    ? "bg-primary hover:bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-900"
                }`}
              >
                Choose Plan
              </button> */}

                {plan.has_clickbait && (
                  <span className="block text-sm text-primary font-medium mt-2">
                    {plan.clickbait_label}
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
