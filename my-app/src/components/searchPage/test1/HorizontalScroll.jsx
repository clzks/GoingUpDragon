import React, { useRef } from "react";
import "./HorizontalScroll.css";

const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="scroll-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        {"<"}
      </button>
      <div className="scrollable" ref={scrollRef}>
        {Array.from({ length: 10 }, (_, i) => (
          <div className="item" key={i}>
            Item {i + 1}
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default HorizontalScroll;
