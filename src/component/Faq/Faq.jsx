import "../Faq/faq.css";
import Accordion from "./Accordion";
import Header from "./Header";

export default function Faq() {
  return (
    <>
    <Header />
      <div className="container">
        <Accordion />
      </div>
    </>
  );
}
