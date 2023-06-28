/* eslint-disable react/prop-types */
import { BsChevronUp,BsChevronDown } from 'react-icons/bs';

export default function AccordionItem({ faq,onToggle,active }) {
  const { title, content } = faq;
  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        {title}
        <span className="control">{active ? <BsChevronUp/> : <BsChevronDown/> } </span>
      </button>
      <div className={`answer_wrapper ${active ? "open" : ""}`}>
        <div className="answer">{content}</div>
      </div>
    </li>
  );
}
