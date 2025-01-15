"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Who can Apply?",
      answer: "Students from all colleges across the globe are welcome to apply."
    },
    {
      question: "How to Apply for the post of Campus Ambassador?",
      answer: "Click on Register. You will have registered successfully once you submit the form."
    },
    {
      question: "What is the Selection Process?",
      answer: "After registration, you will have to go through a short telephonic interview before being selected."
    },
    {
      question: "Can there be multiple College Ambassadors from a single college?",
      answer: "Yes, depending on the size of the college, we can appoint multiple College Ambassadors."
    },
    {
      question: "How can I get assistance from Team Fluxus?",
      answer: "All campus ambassadors will be allotted managers, who will be their point of contact during the entire course of the program. You will receive all guidance and assistance from your managers."
    },
    {
      question:"How will my progress be monitored?",
      answer:"You will submit proofs of your work to your managers; upon verifications you will be rewarded with points that measure your progress. Please feel free to contact your managers if you have any queries."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="section bg-[#FFF8E1]">
      <div className="max-w-3xl bg-[#FFF8E1] overflow-hidden mx-auto px-4 py-8 h-fit">
        <h2 className="text-5xl md:text-6xl mt-6 text-[rgb(50,50,50)] font-black bg-clip-text" style={{fontFamily:"var(--font-monument-extended)"}}>{"Frequently Asked"}</h2>
        <h2 className="text-5xl md:text-6xl mt-2 mb-8 text-[rgb(204,117,0)] font-black bg-clip-text" style={{fontFamily:"var(--font-monument-extended)"}}>{"Questions"}</h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-[#ffe9cf] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-[1.3em] font-semibold text-left tracking-normal text-[#FF6600] group-hover:text-[#E65C00 transition-all duration-300" style={{fontFamily:"var(--font-aileron-bold)"}}>{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  <div className={`p-[3px] rounded-full border-2 border-purple-600 transform transition-transform duration-300 ease-linear ${activeIndex === index ? "rotate-180" : "rotate-0"}`} style={{borderColor:"rgb(18, 149, 145)"}}>
                    <FiChevronDown className="h-4 w-4 text-purple-600 font-bold" />
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
                <div className="p-4 border-t border-gray-200 bg-[#fff3e4]">
                  <p className="text-[#333333] px-2" style={{fontFamily:"var(--font-aileron-bold)"}}>{faq.answer}</p>
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