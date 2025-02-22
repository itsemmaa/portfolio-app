import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span className={`icon ${isOpen ? "rotate" : ""}`}>&#9660;</span>
            </button>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                <p>{content}</p>
                </div>
            </div>
    );
};

export default Accordion;