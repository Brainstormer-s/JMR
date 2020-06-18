import React, { Component } from 'react';
import './poster.css';
import Movie from "./Movie";

class Movies extends Component {
  render() {
    return (
      <div className="ml-10">
        <div className="movieRow">
          <Movie title="Spider Man : Homecoming" size="2.4 GB" price="2 Birr" />
          <Movie title="Spider Man : Homecoming" size="2.4 GB" price="2 Birr" />
          <Movie title="Spider Man : Homecoming" size="2.4 GB" price="2 Birr" />
          <Movie title="Spider Man : Homecoming" size="2.4 GB" price="2 Birr" />
        </div>
        <div className="movieRow">
          <Movie title="The Night At The Museum" size="844 MB" price="2 Birr" />
          <Movie title="The Night At The Museum" size="844 MB" price="2 Birr" />
          <Movie title="The Night At The Museum" size="844 MB" price="2 Birr" />
          <Movie title="The Night At The Museum" size="844 MB" price="2 Birr" />
        </div>
        <div className="movieRow">
          <Movie title="art is an explosion" size="1004 MB" price="2 Birr" />
          <Movie title="art is an explosion" size="1004 MB" price="2 Birr" />
          <Movie title="art is an explosion" size="1004 MB" price="2 Birr" />
          <Movie title="art is an explosion" size="1004 MB" price="2 Birr" />
        </div>
      </div>
    )
  }
}

export default Movies;
