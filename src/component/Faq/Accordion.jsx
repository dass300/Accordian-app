/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [faq, setFaq] = useState([
    {
      title: "How does React work?",
      content:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."
    },
    {
      title: "How does React work?",
      content:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."
    },
    {
      title: "How does React work?",
      content:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium."
    }
  ]);

  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
    <>
      <ul className="accordion">
        {faq.map((faqs, index) => (
          <AccordionItem
            key={index}
            faq={faqs}
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
      </ul>
    </>
  );
}
