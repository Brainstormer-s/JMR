import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

export class CartItem extends Component {
  onDeleteCartItemClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CART_ITEM", payload: id });
    console.log(id);
  };
  render() {
    const { id, title, size, price } = this.props.cartItem;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card bg-blue-600 mt-2 pl-3 pt-1 hover:bg-blue-800">
              <i
                className="float-right mt-1 m-2 fa fa-times hover: cursor-pointer"
                onClick={this.onDeleteCartItemClick.bind(this, id, dispatch)}
              ></i>
              <h5 className="capitalize">{title}</h5>
              <h5>{size}</h5>
              <h5>{price}</h5>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

CartItem.propTypes = {
  CartItem: PropTypes.object.isRequired,
};

export default CartItem;
