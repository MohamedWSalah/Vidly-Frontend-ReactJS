import React, { Component } from "react";

class GenreList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul class="list-group">
          <li class="list-group-item active">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default GenreList;
