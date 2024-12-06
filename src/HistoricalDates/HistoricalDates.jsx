import { useEffect, useRef } from "react";
import { converter } from "../Converter/converter";
import { gsap } from "gsap";
import "./styles.css";
import { historicalEvents } from "./historicaEvents";

export const HistoricalDates = ({ indexPoint }) => {
  const dates = [
    "2000 2005",
    "2006 2010",
    "2011 2015",
    "2016 2018",
    "2018 2022",
    "2022 2024",
  ];
  const convertDates = converter(dates);

  const dateRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(dateRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
    });
    tl.to(dateRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [indexPoint]);

  return (
    <>
      <div className="date" ref={dateRef}>
        {convertDates[indexPoint]}
      </div>
      <div className="events">{historicalEvents[indexPoint]}</div>
    </>
  );
};
