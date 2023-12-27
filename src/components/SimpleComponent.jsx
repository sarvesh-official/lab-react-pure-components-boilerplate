import React from "react";

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      counter: 0,
    };
  }

  toggleHandler = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };

  counterHandler = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }
  };

  render() {
    console.log("Simple Component");

    return (
      <div>
        SimpleComponent
        <h2>{this.state.counter}</h2>
        <button onClick={this.toggleHandler}>Toggle</button>
        <button onClick={this.counterHandler}>Counter</button>
      </div>
    );
  }
}

export default SimpleComponent;
