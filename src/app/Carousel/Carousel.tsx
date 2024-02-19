import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import Carousel from "react-material-ui-carousel";
import slider from "../helper/slider.json";
// import { v4 as uuidv4 } from 'uuid';

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleChange = (now?: number, previous?: number) => {
    if (now !== undefined) {
      setActiveIndex(now);
    }
  };

  return (
    <Carousel onChange={handleChange}>
      {slider.map((item, index) => (
        <div key={index}>
          <CarouselItem
            key={item.id}
            item={item}
            isLast={index === slider.length - 1}
            isFirstOrSecond={index < 2}
          />
        </div>
      ))}
    </Carousel>
  );
}
