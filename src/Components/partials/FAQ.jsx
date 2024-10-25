import React, { useState } from "react";

const FAQ = () => {
  // Sample FAQ data
  const faqs = [
    {
      question: "How long does carpet repair or installation take?",
      answer:
        "The time depends on the size of the area and the complexity of the job. Small carpet repairs can be done in a few hours, while vinyl or carpet installations may take a day or more. We’ll provide a clear timeline after assessing your project.",
    },
    {
      question: "Can you install vinyl and carpet flooring?",
      answer:
        "Yes! In addition to carpet repairs, we specialize in installing both vinyl and carpet flooring. Whether you're looking for a durable vinyl option or soft carpeting, we’ve got you covered.",
    },
    {
      question: "Will the repaired area of the carpet be noticeable?",
      answer:
        "Our goal is to make repairs as seamless as possible. We carefully match fibers and colors to blend repairs with your existing carpet. In most cases, the repaired area will be nearly invisible.",
    },
    {
      question: "Do I need to move my furniture for repair or installation?",
      answer:
        "Yes, having the area clear helps us work efficiently. If you need assistance moving furniture, let us know ahead of time, and we’ll coordinate with you.",
    },
    {
      question: "How much does repair or installation cost?",
      answer:
        "Costs vary based on the type of service, materials used, and the size of the area. We offer competitive pricing and provide free estimates so you know exactly what to expect.",
    },
    {
      question: "What types of carpets can you repair and install?",
      answer:
        "We can repair and install a wide range of carpets, including wool, nylon, and polyester. If you’re considering vinyl flooring, we can also guide you through the best options to suit your needs.",
    },
    {
      question: "Will repairs or installation affect my warranty?",
      answer:
        "In most cases, repairs won’t void your warranty, but we recommend checking with your manufacturer. We’re happy to provide guidance and make sure everything goes smoothly.",
    },
  ];

  // State to keep track of which FAQ is expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for expanding/collapsing FAQ answers
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      // Collapse if the same index is clicked
      setActiveIndex(null);
    } else {
      // Expand the clicked index
      setActiveIndex(index);
    }
  };

  return (
    <section className="max-w-2xl mx-auto px-8 py-20 flex flex-col items-center">
      <h1 className="py-20 text-5xl text-secondary text-center font-bold">
        Frequently Asked Questions
      </h1>
      <div className="p-4 bg-white rounded-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-semibold text-black">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Show answer if this is the active FAQ */}
            {activeIndex === index && (
              <div className="p-4 text-text transition-all duration-600 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
