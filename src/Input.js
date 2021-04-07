const Input = ({ handleInput, task, isPaused, isWorking }) => {
  return isWorking ? (
    isPaused ? (
      <input
        value={task}
        onChange={(e) => handleInput(e)}
        placeholder="What are you working on?"
      ></input>
    ) : (
      <h2 className="light" id="timer-label">
        {task === "" ? "Working" : task}
      </h2>
    )
  ) : (
    <h2 className="light" id="timer-label">
      Break time!
    </h2>
  );
};

export default Input;

//timer-label goes here
//Input accesibility?
