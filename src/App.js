import "./styles.css";
import React from "react";
import Input from "./Input";
import Timer from "./Timer";
import LengthControls from "./LengthControls";
import SessionControls from "./SessionControls";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 15, //In seconds
      isPaused: true,
      isWorking: true,
      task: "",
      sessionLength: 25,
      restLength: 5 //Both lengths are in minutes
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleRestLength = this.handleRestLength.bind(this);
    this.handleSessionLength = this.handleSessionLength.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  countdown = () => {
    this.setState((state) => ({
      timeLeft: state.timeLeft - 1
    }));
    if (this.state.timeLeft < 0) {
      this.setState((state) => ({
        timeLeft: state.restLength * 60
      }));
    }
  };

  handlePlay() {
    this.setState((state) => ({
      isPaused: !state.isPaused
    }));
    this.timer = setInterval(this.countdown, 1000);
  }

  handlePause() {
    this.setState({ isPaused: true });
    clearInterval(this.timer);
  }

  handleRestLength(value) {
    if (this.state.restLength >= 60 && value > 0) {
      return;
    }
    if (this.state.restLength <= 1 && value < 0) {
      return;
    }
    this.setState((state) => ({
      restLength: state.restLength + value
    }));
  }

  handleSessionLength(value) {
    if (this.state.sessionLength >= 60 && value > 0) {
      return;
    }
    if (this.state.sessionLength <= 1 && value < 0) {
      return;
    }
    this.setState((state) => ({
      sessionLength: state.sessionLength + value,
      timeLeft: (state.sessionLength + value) * 60
    }));
  }

  handleInput(e) {
    this.setState({
      task: e.value
    });
  }

  render() {
    return (
      <>
        <Input
          handleInput={this.handleInput}
          task={this.state.task}
          isWorking={this.state.isWorking}
          isPaused={this.state.isPaused}
        />
        <Timer timeLeft={this.state.timeLeft} />
        <LengthControls
          session={this.state.sessionLength}
          rest={this.state.restLength}
          handleRestLength={this.handleRestLength}
          handleSessionLength={this.handleSessionLength}
        />
        <SessionControls
          isPaused={this.state.isPaused}
          handlePlay={this.handlePlay}
          handlePause={this.handlePause}
        />
        <audio
          src="https://assets.mixkit.co/sfx/preview/mixkit-repeating-arcade-beep-1084.mp3"
          id="beep"
        ></audio>
      </>
    );
  }
}
