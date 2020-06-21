import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

export class CartItem extends Component {
  onDeleteItemClick = (dispatch, id) => {
    dispatch({ type: "DELETE_CART_ITEM", payload: id });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { title, price, size, id } = this.props.cartItem;
          const { dispatch } = value;
          return (
            <div className="pl-3 pt-1  border-b-2 border-blue-600 hover:bg-blue-600 hover:text-white">
              <h5 className="capitalize">{title}</h5>
              <i
                className="group-hover:visible float-right pr-1 pt-2 fa fa-times hover:text-red-600 hover: cursor-pointer"
                onClick={this.onDeleteItemClick.bind(this, dispatch, id)}
              ></i>
              <div className="pb-2 pt-1 flex">
                <h5 className="">{size}</h5>
                <h5 className="ml-10">{price}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};
export default CartItem;
