import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
  };
  render() {
    return (
      <div className="alert alert-primary" role="alert">
        <h1>My first react app :)</h1>
        <img
          src={this.state.imageUrl}
          alt="random-slika"
          style={{
            display: "block",
            marginBottom: "20px",
            border: "1px solid white",
          }}
        ></img>
        <span className={this.pickClassName()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  pickClassName() {
    //dinamicko renderovanje
    let name = "badge m-2 bg-";
    return (name += this.state.count === 0 ? "warning" : "primary");
  }
}

export default Counter;
