import { Theme } from '@/app/providers/ThemeProvider';
import React, { useRef } from 'react';

interface Props {
  children: React.ReactElement;
  step?: number;
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
    <div className='flex w-full items-center gap-[8px]'>
      <button onClick={scrollLeft} className='cursor-pointer border-none bg-white'>{`<`}</button>
      {/* №Кейс - связать useRef и чилдрен */}
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className='cursor-pointer border-none bg-white'>{`>`}</button>
    </div>
  );
};

export default Slider;
