import React, { Component } from "react";
import start from "../logic";

class Grid extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    start(this.props.rules, canvas);
  }

  render() {
    return (
      <div>
        <div className="Grid">
          <div>
            steps:
            <span id="steps" />
          </div>
          <canvas ref="canvas" width="500" height="500" />
        </div>
        <button onClick={this.props.pause}>{this.props.startStopText}</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default Grid;
