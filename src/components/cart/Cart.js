import React, { Component } from "react";
import CartItem from "./CartItem";
import { Consumer } from "../../context";

export class Cart extends Component {
  onClearCartClick = (dispatch) => {
    dispatch({ type: "CLEAR_CART" });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { cart, dispatch } = value;
          return (
            <React.Fragment>
              <div
                className="ml-4 bg-gray-400 p-1 text-white w-56 rounded-sm opacity-100 overflow-y-auto scrolling-auto"
                style={{ height: "25vmax" }}
              >
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
              <div className="flex">
                <div
                  className="mb-3 mt-3 h-8 text-white pl-10 pr-8 w-auto border-2 rounded-bl-full ml-5 hover:bg-red-700 hover:border-transparent cursor-pointer"
                  onClick={this.onClearCartClick.bind(this, dispatch)}
                >
                  Clear
                </div>
                <div className="mb-3 mt-3 h-8 text-white pl-8 pr-10 w-auto border-2 rounded-br-full ml-1 hover:bg-green-700 hover:border-transparent cursor-pointer">
                  Buy
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Cart;
