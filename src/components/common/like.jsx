import React, { Component } from "react";

class like extends Component {
  state = {
    classes: "fa fa-heart",
  };

  render() {
    let classes = this.state.classes;
    if (!this.props.liked) classes += "-o";

    return (
      <i
        className={classes}
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      ></i>
    );
  }

  onMouseEnter = () => {
    const c = (this.state.classes = "fa fa-heart -o");
    this.setState({ c });
  };

  onMouseLeave = () => {
    const c = (this.state.classes = "fa fa-heart");

    this.setState({ c });
  };
}

export default like;
