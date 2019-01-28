import React, { Component } from "react";
import { start, reset, updateState } from "../logic";
import { Button, Segment } from 'semantic-ui-react'

class Draw extends Component {
  componentDidMount() {
    this.canvas = this.refs.canvas;
    start(this.props.state, this.canvas);
  }

  componentDidUpdate() {
    updateState(this.props.state);
  }

  resetCanvas = () => {
    reset(this.canvas);
  };

  render() {
    return (
      <Segment className="grid-card">
        <div className="Grid">
          <canvas ref="canvas" width="500" height="500" />
        </div>
        <div className="interaction">
          <div className="buttons">
            <Button basic color="green" onClick={this.props.toggleRunning}>
              {this.props.state.running ? "Stop" : "Start"}
            </Button>
            <Button basic color="purple" onClick={this.resetCanvas}>Reset</Button>
          </div>
          <div className="sliders">
            <input
              type="range"
              id="speed"
              value={this.props.state.speed}
              name="speed"
              min="1"
              max="10"
              onChange={this.props.changeSpeed}
            />
            <label htmlFor="volume">Speed: {this.props.state.speed}</label>
            <input
              type="range"
              id="size"
              value={this.props.state.size}
              name="size"
              min="1"
              max="10"
              onChange={this.props.changeSize}
            />
            <label htmlFor="volume">Zoom: {this.props.state.size}</label>
          </div>
          <div className="steps">
            <div>
              steps:
              <span id="steps" />
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}

export default Draw;
