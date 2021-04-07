import { FaRedoAlt, FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const SessionControls = ({ isPaused, handlePlay, handlePause }) => {
  return (
    <div className="session-controls">
      <div id="start_stop">
        {isPaused ? (
          <FaPlayCircle className="button" onClick={() => handlePlay()} />
        ) : (
          <FaPauseCircle className="button" onClick={() => handlePause()} />
        )}
      </div>
      <FaRedoAlt className="button" id="reset" />
    </div>
  );
};

export default SessionControls;
