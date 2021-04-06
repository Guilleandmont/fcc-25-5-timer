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
      timeLeft: 1500, //In seconds
      isPaused: true,
      task: ["", "Break time!"],
      sessionLength: 25,
      restLength: 5 //Both lengths are in minutes
    };
    this.handleRestLength = this.handleRestLength.bind(this);
    this.handleSessionLength = this.handleSessionLength.bind(this);
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

  render() {
    return (
      <>
        <Input />
        <Timer timeLeft={this.state.timeLeft} />
        <LengthControls
          session={this.state.sessionLength}
          rest={this.state.restLength}
          handleRestLength={this.handleRestLength}
          handleSessionLength={this.handleSessionLength}
        />
        <SessionControls isPaused={this.state.isPaused} />
        <audio
          src="https://assets.mixkit.co/sfx/preview/mixkit-repeating-arcade-beep-1084.mp3"
          id="beep"
        ></audio>
      </>
    );
  }
}
