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
    running: false
  };

  componentDidMount() {}

  toggle = (rule) => {
    let state = {...this.state};
    state.rules[rule].dir === "left" ? state.rules[rule].dir = "right" : state.rules[rule].dir = "left";
    this.setState(state);
  }

  pause = () => {

  }

  render() {
    return (
      <div className="App">
        <Grid rules={this.state.rules} running={this.state.running} />
        <Rules toggle={this.toggle} rules={this.state.rules} />
      </div>
    );
  }
}

export default App;
