import React, { Component } from "react";

class like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";

    return (
      <i
        className={classes}
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default like;
