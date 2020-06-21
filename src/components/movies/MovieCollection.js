import React, { Component } from "react";
import "./cardStyle.css";
import Movie from "./Movie";
import { Consumer } from "../../context";

class MovieCollection extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { movieCollection } = value;
          return (
            <div className="ml-10 text-white new ">
              {movieCollection.map((movie) => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default MovieCollection;
