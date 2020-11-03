import React, { Component } from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author="Alex"
            timeAgo="Today at 10:00AM"
            content="I like the post."
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="Sharan"
            timeAgo="Today at 11:00AM"
            content="I like the post too."
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="John"
            timeAgo="Today at 12:00AM"
            content="Nice."
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
