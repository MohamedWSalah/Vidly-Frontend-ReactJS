import React, { Component } from "react";

class GenreList extends Component {
  render() {
    const { onGenreSelect, selectedItem, genres } = this.props;

    return (
      <React.Fragment>
        <ul className="list-group">
          {genres.map((G) => (
            <li
              key={G._id}
              className={
                G === selectedItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              style={{ cursor: "pointer" }}
              onClick={() => onGenreSelect(G)}
            >
              {G.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default GenreList;
