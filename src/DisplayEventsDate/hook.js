import { useRef, useState } from "react";
import { gsap } from "gsap";

export const useHistoricalDates = () => {
  const circleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const totalPoints = 6;

  const handleClick = (index) => {
    const rotationStep =
      index > activeIndex
        ? -((index - activeIndex) * (360 / totalPoints))
        : (activeIndex - index) * (360 / totalPoints);

    gsap.to(circleRef.current, {
      rotation: `+=${rotationStep}`,
      duration: 1,
      ease: "power2.out",
    });

    setActiveIndex(index);
  };

  return {circleRef, activeIndex, hoveredIndex, setHoveredIndex, totalPoints, handleClick}
};
