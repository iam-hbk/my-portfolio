/* eslint-disable */
import { FaArrowDown } from "react-icons/fa";

const ScrollDownArrow: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-14">
      <h2 className="gradient-text">More about me </h2>
      <FaArrowDown className="animate-bounce text-7xl text-accent" />
    </div>
  );
};

export default ScrollDownArrow;
