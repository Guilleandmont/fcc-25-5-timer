import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const LengthControls = ({
  rest,
  session,
  handleRestLength,
  handleSessionLength
}) => {
  return (
    <div className="length-controls-container">
      <div className="length-controls">
        <p id="break-label" className="light">
          Rest time
        </p>
        <p id="break-length">{`${rest}:00`}</p>
        <div className="increase-decrease">
          <FaChevronDown
            id="break-decrement"
            className="arrow"
            onClick={() => handleRestLength(-1)}
          />
          <FaChevronUp
            id="break-increment"
            className="arrow"
            onClick={() => handleRestLength(1)}
          />
        </div>
      </div>
      <div className="length-controls">
        <p id="session-label" className="light">
          Session length
        </p>
        <p id="session-length">{`${session}:00`}</p>
        <div className="increase-decrease">
          <FaChevronDown
            id="session-decrement"
            className="arrow"
            onClick={() => handleSessionLength(-1)}
          />
          <FaChevronUp
            id="session-increment"
            className="arrow"
            onClick={() => handleSessionLength(1)}
          />
        </div>
      </div>
    </div>
  );
};

export default LengthControls;
