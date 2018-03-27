import React, { Component } from "react";

class Route2 extends Component {
  render() {
    const { person } = this.props.match.params;
    return <h1>I am {person}!!!</h1>;
  }
}

export default Route2;
