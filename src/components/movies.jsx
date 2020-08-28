import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import Like from "./common/like";
import { paginate } from "../utils/paginate";
import GenreList from "./genreList";
class Movies extends Component {
  state = {
    movies: getMovies(),
    deletebtn: "btn btn-dark",
    pageSize: 4,
    currentPage: 1,
  };

  render() {
    const { currentPage, pageSize, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);
    return <React.Fragment>{this.movieCheck(movies)}</React.Fragment>;
  }

  movieCheck(M) {
    return this.state.movies.length === 0 ? (
      <h1>There is no movies in the list {this.state.movies.length}</h1>
    ) : (
      <div>
        <div className="row m-2">
          <GenreList></GenreList>

          <div class="col">
            <p style={{ margin: 10 }}>
              There is {this.state.movies.length} Movies Stored
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th>Like</th>
                  <th>Delete?</th>
                </tr>
              </thead>
              <tbody>
                {M.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className={this.state.deletebtn}
                        onMouseEnter={() => this.deleteBtnIn()}
                        onMouseLeave={() => this.deleteBtnOut()}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={this.state.movies.length}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            ></Pagination>
          </div>
        </div>
      </div>
    );
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  deleteBtnIn = (id) => {
    let deletebtn = this.state.deletebtn;
    deletebtn === "btn btn-danger"
      ? (deletebtn = "btn btn-dark")
      : (deletebtn = "btn btn-danger");
    this.setState({ deletebtn });
  };

  deleteBtnOut = (id) => {
    let deletebtn = this.state.deletebtn;
    deletebtn === "btn btn-dark"
      ? (deletebtn = "btn btn-danger")
      : (deletebtn = "btn btn-dark");
    this.setState({ deletebtn });
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };
}

export default Movies;
