import { FaRedoAlt, FaPlayCircle, FaPauseCircle } from "react-icons/fa";

const SessionControls = ({ isPaused }) => {
  return (
    <div class="session-controls">
      <div id="start_stop">
        {isPaused ? (
          <FaPlayCircle class="button" />
        ) : (
          <FaPauseCircle class="button" />
        )}
      </div>
      <FaRedoAlt class="button" id="reset" />
    </div>
  );
};

export default SessionControls;
