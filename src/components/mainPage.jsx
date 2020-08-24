import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Main extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <React.Fragment>
        <h1>PLEASE</h1>
        {this.movieCheck()}
      </React.Fragment>
    );
  }

  movieCheck() {
    return this.state.movies.length === 0 ? (
      <h1>There is no movies in the list {this.state.movies.length}</h1>
    ) : (
      <React.Fragment>
        <p>There is {this.state.movies.length} Movies Stored</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Delete?</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button className="btn btn-dark">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  deleteButton() {}
}

export default Main;
