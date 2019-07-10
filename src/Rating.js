import React, { Component } from "react";

export default class Rating extends Component {
  render() {
    return (
      <span className="rating">        
        {"*".repeat(this.props.stars)}
      </span>
    );
  }
}
