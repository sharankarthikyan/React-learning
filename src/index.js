import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" />
          </a>
          <div className="content">
            <a href="/" className="author">
              Sharan
            </a>
            <div className="metadata">
              <span className="date">Today at 10:00AM</span>
            </div>
            <div className="text">I like the post.</div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
