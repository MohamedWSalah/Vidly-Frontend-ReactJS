import React, { Component } from "react";
import Like from "./common/like";
import Delete from "./common/deletebutton";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      label: "Like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.handleLike(movie)}
        />
      ),
    },
    {
      key: "delete",
      label: "Delete?",
      content: (movie) => (
        <Delete
          handleDelete={this.props.handleDelete}
          deletebtn={this.props.deletebtn}
          deleteBtnIn={this.props.deleteBtnIn}
          deleteBtnOut={this.props.deleteBtnOut}
          movie={movie}
        ></Delete>
      ),
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        ></TableHeader>

        <TableBody data={movies} columns={this.columns}></TableBody>
      </table>
    );
  }
}

export default MoviesTable;
