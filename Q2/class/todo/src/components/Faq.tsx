import React, { useState } from "react";
import "./faq.css";
import { aiQuestions } from "@/data/Faq";
import { ChevronDown, ChevronUp } from "lucide-react";
const Faq = () => {
  const [showAns, setShowAns] = useState(aiQuestions[0].id);
  return (
    <div className="max-w-[1200px] mx-auto">
      {aiQuestions.map((item, index) => (
        <div key={item.id} className="border border-gray-600 mb-5">
          <h2
            onClick={() => setShowAns(item.id)}
            className="bg-black text-white p-5 cursor-pointer relative"
          >
            {index + 1} {item.question}
            {showAns === item.id ? <ChevronUp className="absolute right-3 top-3" /> : <ChevronDown className="absolute right-3 top-3" />}
          </h2>
          <p
            className={`text-left h-0 p-0 m-0 scale-y-0 transition-all ${
              showAns == item.id
                ? "h-auto-important scale-y-1-important p-2-5-important"
                : ""
            }`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
