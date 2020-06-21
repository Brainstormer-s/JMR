import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

class Movie extends Component {
  onAddToCartClick = (dispatch, id) => {
    dispatch({ type: "ADD_TO_CART", payload: id });
    console.log(id);
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const {
            title,
            size,
            price,
            description,
            poster,
            id,
          } = this.props.movie;
          const { dispatch } = value;
          return (
            <div className="card gk mt-10">
              <img className="poster z-0" src={poster} alt="Poster not found" />
              <div className="content overflow-y-auto z-40">
                <h2 className="title capitalize">{title}</h2>
                <p className="copy">{description}</p>
                <div className="flex justify-between mt-6 mb-6">
                  <p className="ee text-center ml-4 ">{price}</p>
                  <p className="ee text-center mr-4 ">{size}</p>
                </div>
                <div
                  className="btn rounded-md cursor-pointer"
                  onClick={this.onAddToCartClick.bind(this, dispatch, id)}
                >
                  <i className="so fa fa-shopping-cart fa-x mr-2"></i>
                  Add to cart
                </div>
              </div>
              <div className="hovi w-full h-full"> </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default Movie;
