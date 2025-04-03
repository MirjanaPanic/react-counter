import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
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
        <br></br>
        <ul
          style={{
            backgroundColor: "beige",
            color: "black",
            display: "inline-block",
          }}
        >
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
