const Timer = ({ timeLeft }) => {
  function toMinutes(num) {
    const minutes = Math.floor(num / 60);
    return minutes < 10 ? `0${minutes}` : minutes;
  }

  function toSeconds(num) {
    const seconds = num % 60;
    return seconds < 10 ? `0${seconds}` : seconds;
  }

  return (
    <div className="timer-container">
      <h1 id="time-left">{`${toMinutes(timeLeft)}:${toSeconds(timeLeft)}`}</h1>
    </div>
  );
};

export default Timer;

//function to make sure that time is always displayed as mm:ss. Function could also be in app, so it can be passed to the controls.
