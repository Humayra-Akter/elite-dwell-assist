import React, { useState, useEffect } from "react";
import scroll from "../../images/scrollToTOp.svg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          className="scroll-to-top fixed bottom-20 right-30 left-10 z-50 text-white font-bold cursor-pointer p-2 rounded-full transition-colors duration-300 hover:bg-secondary"
          onClick={scrollToTop}
        >
          <img src={scroll} alt="" className="w-10" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
