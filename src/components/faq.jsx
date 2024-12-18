"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also support PayPal and various digital payment methods for your convenience."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary depending on your location. Typically, domestic orders arrive within 3-5 business days, while international shipping can take 7-14 business days. Express shipping options are available at checkout."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return. Return shipping costs may apply unless the item is defective."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can calculate shipping costs at checkout by entering your delivery address."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can use this tracking number on our website or the carrier's website to monitor your package's progress."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="section bg-white">
      <div className="max-w-3xl bg-white h-screen mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-50"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-left text-[19px] text-gray-900 font-medium">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  <div className={`p-[3px] rounded-full border border-purple-600 transform transition-transform duration-300 ease-linear ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                    <FiChevronDown className="h-4 w-4 text-purple-600" />
                  </div>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-500 ease-in-out ${activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-70"
                  } overflow-hidden`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="p-4 border-t border-gray-200">
                  <p className="text-gray-700 px-2">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;