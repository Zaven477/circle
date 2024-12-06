import leftIcon from "../images/iconLeft.png";
import rightIcon from "../images/iconRight.png";
import "./styles.css";

export const IconButtons = ({ onClickSwitch, currentIndex }) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const nextDate = () => {
    onClickSwitch(currentIndex + 1);
  };

  const prevDate = () => {
    onClickSwitch(currentIndex - 1);
  };

  return (
    <div>
      <div className="points">0{numbers[currentIndex]}/06</div>
      <button
        className="left-button"
        onClick={prevDate}
        disabled={currentIndex === 0}
      >
        <div>
          <img src={leftIcon} alt="" />
        </div>
      </button>
      <button
        className="right-icon"
        onClick={nextDate}
        disabled={currentIndex === numbers.length - 1}
      >
        <div>
          <img src={rightIcon} alt="" />
        </div>
      </button>
    </div>
  );
};
