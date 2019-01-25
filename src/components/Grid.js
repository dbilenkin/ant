import React, { Component } from "react";
import { start, toggle, reset, getSteps } from "../logic";

class Grid extends Component {

  componentDidMount() {
    this.canvas = this.refs.canvas;
    start(this.props.state, this.canvas);
  }

  toggleRunning = () => {
    toggle();
  }

  resetCanvas = () => {
    reset(this.canvas);
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
        <button onClick={this.toggleRunning}>Toggle</button>
        <button onClick={this.resetCanvas}>Reset</button>
      </div>
    );
  }
}

export default Grid;
