import { FaRedoAlt, FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const SessionControls = ({
  isPaused,
  handlePlay,
  handlePause,
  handleReset
}) => {
  return (
    <div className="session-controls">
      <button
        className="session-btn"
        id="start_stop"
        onClick={isPaused ? () => handlePlay() : () => handlePause()}
      >
        {isPaused ? (
          <FaPlayCircle className="session-icons" />
        ) : (
          <FaPauseCircle className="session-icons" />
        )}
      </button>
      <button className="session-btn" id="reset" onClick={() => handleReset()}>
        <FaRedoAlt className="session-icons" />
      </button>
    </div>
  );
};

export default SessionControls;
