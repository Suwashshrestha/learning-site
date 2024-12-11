import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

function Card({ answer, question }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card4">
      <div className="questions" onClick={toggleDropdown}>
        <span>{question}</span>
        <IoMdArrowDropdown className={`dropdown-icon ${isOpen ? "open" : ""}`} />
      </div>
      <div className={`answers ${isOpen ? "show" : ""}`}>
        {answer}
      </div>
      <div className={`card4-img-group ${isOpen ? "show" : ""}`}>
        <div className="card4-img">
        <img src="./course-detail-image-105.jpg" alt="Course" className="img-card4" />
        <img src="/course-detail-image-109.jpg" alt="Course" className="img-card4" />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Card;
