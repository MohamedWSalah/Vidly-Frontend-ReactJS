import React, { Component } from "react";

class Delete extends Component {
  state = {
    deletebtn: "btn btn-dark",
  };
  render() {
    const { handleDelete, movie } = this.props;
    return (
      <button
        onClick={() => handleDelete(movie)}
        className={this.state.deletebtn}
        onMouseEnter={this.deleteBtnIn}
        onMouseLeave={this.deleteBtnOut}
      >
        Delete
      </button>
    );
  }

  deleteBtnIn = () => {
    let deletebtn = this.state.deletebtn;
    deletebtn === "btn btn-danger"
      ? (deletebtn = "btn btn-dark")
      : (deletebtn = "btn btn-danger");
    this.setState({ deletebtn });
  };

  deleteBtnOut = () => {
    let deletebtn = this.state.deletebtn;
    deletebtn === "btn btn-dark"
      ? (deletebtn = "btn btn-danger")
      : (deletebtn = "btn btn-dark");
    this.setState({ deletebtn });
  };
}

export default Delete;
