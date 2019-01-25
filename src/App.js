import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Rules from "./components/Rules";

class App extends Component {
  state = {
    rules: {
      white: {
        color: "red",
        dir: "left"
      },
      red: {
        color: "yellow",
        dir: "left"
      },
      yellow: {
        color: "blue",
        dir: "right"
      },
      blue: {
        color: "orange",
        dir: "left"
      },
      orange: {
        color: "green",
        dir: "right"
      },
      green: {
        color: "purple",
        dir: "right"
      },
      purple: {
        color: "white",
        dir: "left"
      }
    },
    running: true,
    speed: 100
  };

  componentDidMount() {}

  toggle = (rule) => {
    let state = {...this.state};
    state.rules[rule].dir === "left" ? state.rules[rule].dir = "right" : state.rules[rule].dir = "left";
    this.setState(state);
  }

  toggleRunning = () => {
    this.setState({ running: !this.state.running });
  }

  render() {
    return (
      <div className="App">
        <Grid state={this.state} toggleRunning={this.toggleRunning}/>
        <Rules toggle={this.toggle} rules={this.state.rules} />
      </div>
    );
  }
}

export default App;
