import React, { useRef } from "react";

interface Props {
  children: React.ReactElement;
  step?: number;
  isDark: boolean;
}

const Slider = ({ children, step = 150 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className="flex w-full gap-[8px] items-center">
      <button
        onClick={scrollLeft}
        className="border-none bg-white cursor-pointer"
      >{`<`}</button>
      {/* №Кейс - связать useRef и чилдрен */}
      {React.cloneElement(children, { ref: sliderRef })}
      <button
        onClick={scrollRight}
        className="border-none bg-white cursor-pointer"
      >{`>`}</button>
    </div>
  );
};

export default Slider;
