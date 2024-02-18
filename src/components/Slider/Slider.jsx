import { cloneElement, useRef } from "react";

const Slider = ({ children, step = 150 }) => {
  const sliderRef = useRef(null);
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };
  return (
    <div className="flex w-full gap-[8px] items-center">
      <button
        onClick={scrollLeft}
        className="border-none bg-white cursor-pointer"
      >
        {"<"}
      </button>
      {/* №Кейс - связать useRef и чилдрен */}
      {cloneElement(children, { ref: sliderRef })}
      <button
        onClick={scrollRight}
        className="border-none bg-white cursor-pointer"
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
