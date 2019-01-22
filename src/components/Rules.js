import React from "react";

const Rules = props => {
  return (
    <div className="Rules">
      <h1>Rules</h1>
      {Object.keys(props.rules).map(rule => (
        <div className="rule">
          <div className="ruleColor" style={{backgroundColor: rule}}></div>
          <div onClick={() => props.toggle(rule)}>{props.rules[rule].dir}</div>
        </div>
      ))}
    </div>
  );
};

export default Rules;
