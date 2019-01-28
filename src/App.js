import React, { Component } from "react";
import "./App.css";
import Draw from "./components/Draw";
import Rules from "./components/Rules";
import "semantic-ui-css/semantic.min.css";
import { Grid, Menu } from "semantic-ui-react";
import { getRandomColor, getLeftOrRight } from "./utils";
import { sampleRules } from "./samples";

class App extends Component {
  state = {
    rules: [],
    running: false,
    speed: 3,
    size: 5
  };

  NUM_RULES = Math.floor(Math.random() * 10) + 1;

  

  makeRules = () => {
    const rules = [];
    rules.push({
      color: "#ffffff",
      dir: getLeftOrRight()
    });

    for (let i = 0; i < this.NUM_RULES; i++) {
      rules.push({
        color: getRandomColor(),
        dir: getLeftOrRight()
      });
    }

    this.setState({ rules });
  };

  componentDidMount() {
    this.makeRules();
  }

  findRuleByColor = color => {
    return this.state.rules.filter(rule => rule.color === color);
  };

  deleteRule = index => {
    let rules = [...this.state.rules];
    rules.splice(index, 1);
    this.setState({ rules });
  };

  addRule = () => {
    let rules = [...this.state.rules];
    rules.push({
      color: getRandomColor(),
      dir: getLeftOrRight()
    });
    this.setState({ rules });
  };

  toggle = index => {
    let rules = [...this.state.rules];
    rules[index].dir === "left"
      ? (rules[index].dir = "right")
      : (rules[index].dir = "left");
    this.setState({ rules });
  };

  changeColor = (index, color) => {
    let rules = [...this.state.rules];
    rules[index].color = color.hex;
    this.setState({ rules });
  };

  changeSpeed = event => {
    this.setState({ speed: event.target.value });
  };

  changeSize = event => {
    this.setState({ size: event.target.value });
  };

  toggleRunning = () => {
    this.setState({ running: !this.state.running });
  };

  handleItemClick = (e, { name }) => {
    this.setState(sampleRules(name));
  };

  render() {
    return (
      <div className="App">
        <Menu text>
          <Menu.Item header>Langton's Ant</Menu.Item>
          <Menu.Item name="original" onClick={this.handleItemClick} />
          <Menu.Item name="symmetric" onClick={this.handleItemClick} />
          <Menu.Item name="weirdSquare" onClick={this.handleItemClick} />
          <Menu.Item name="weirdHighway" onClick={this.handleItemClick} />
          <Menu.Item name="filledTriangle" onClick={this.handleItemClick} />
        </Menu>
        <Grid columns={2} stackable className="fill-content">
          <Grid.Row stretched>
            <Grid.Column width={9}>
              <Draw
                state={this.state}
                changeSize={this.changeSize}
                changeSpeed={this.changeSpeed}
                toggleRunning={this.toggleRunning}
              />
            </Grid.Column>
            <Grid.Column width={2} />
            <Grid.Column width={5}>
              <Rules
                toggle={this.toggle}
                changeColor={this.changeColor}
                toggleRunning={this.toggleRunning}
                addRule={this.addRule}
                deleteRule={this.deleteRule}
                rules={this.state.rules}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
