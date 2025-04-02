import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <div className="alert alert-primary" role="alert">
        <img
          src={this.state.imageUrl}
          alt="random-slika"
          style={{ display: "block", marginBottom: "30px" }}
        ></img>

        <span className="badge bg-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
