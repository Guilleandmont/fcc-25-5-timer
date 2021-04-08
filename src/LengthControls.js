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
          <button
            id="break-decrement"
            className="length-btn"
            onClick={() => handleRestLength(-1)}
          >
            <FaChevronDown className="arrow" />
          </button>
          <button
            id="break-increment"
            className="length-btn"
            onClick={() => handleRestLength(1)}
          >
            <FaChevronUp className="arrow" />
          </button>
        </div>
      </div>
      <div className="length-controls">
        <p id="session-label" className="light">
          Session length
        </p>
        <p id="session-length">{`${session}:00`}</p>
        <div className="increase-decrease">
          <button
            id="session-decrement"
            className="length-btn"
            onClick={() => handleSessionLength(-1)}
          >
            <FaChevronDown className="arrow" />
          </button>
          <button
            id="session-increment"
            className="length-btn"
            onClick={() => handleSessionLength(1)}
          >
            <FaChevronUp className="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LengthControls;
