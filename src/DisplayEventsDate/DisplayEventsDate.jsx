import { HistoricalDates } from "../HistoricalDates/HistoricalDates";
import { IconButtons } from "../IconButtons/IconButtons";
import { useHistoricalDates } from "./hook";
import "./styles.css";

export const DisplayEventsDate = () => {
  const {
    circleRef,
    activeIndex,
    hoveredIndex,
    setHoveredIndex,
    totalPoints,
    handleClick,
  } = useHistoricalDates();

  return (
    <>
      <div className="container">
        <div className="circle" ref={circleRef}>
          {Array.from({ length: totalPoints }, (_, i) => (
            <div
              key={i}
              className="point"
              style={{
                transform: `rotate(${
                  (i * 360) / totalPoints - 60
                }deg) translate(200px)`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(i)}
            >
              {(hoveredIndex === i || activeIndex === i) && (
                <div
                  className="number-point"
                  style={{ transform: `rotate(${-300}deg)` }}
                >
                  {i + 1}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="vertical-border"></div>
        <div className="horizontal-border"></div>
        <HistoricalDates indexPoint={activeIndex} />
        <IconButtons onClickSwitch={handleClick} currentIndex={activeIndex} />
      </div>
    </>
  );
};
