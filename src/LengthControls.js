import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const LengthControls = ({
  rest,
  session,
  handleRestLength,
  handleSessionLength
}) => {
  return (
    <div class="length-controls-container">
      <div class="length-controls">
        <p id="break-label" class="light">
          Rest time
        </p>
        <p id="break-length">{`${rest}:00`}</p>
        <div class="increase-decrease">
          <FaChevronDown
            id="break-decrement"
            class="arrow"
            onClick={() => handleRestLength(-1)}
          />
          <FaChevronUp
            id="break-increment"
            class="arrow"
            onClick={() => handleRestLength(1)}
          />
        </div>
      </div>
      <div class="length-controls">
        <p id="session-label" class="light">
          Session length
        </p>
        <p id="session-length">{`${session}:00`}</p>
        <div class="increase-decrease">
          <FaChevronDown
            id="session-decrement"
            class="arrow"
            onClick={() => handleSessionLength(-1)}
          />
          <FaChevronUp
            id="session-increment"
            class="arrow"
            onClick={() => handleSessionLength(1)}
          />
        </div>
      </div>
    </div>
  );
};

export default LengthControls;
