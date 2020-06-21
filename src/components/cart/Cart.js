import React, { Component } from "react";
import CartItem from "./CartItem";
import "../movies/cardStyle.css";
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
              <h2 className="text-2xl mt-32 text-center mb-4 text-white font-mediume">
                Cart
              </h2>
              <div
                className="bg-white p-1 text-black w-full overflow-y-auto scrolling-auto"
                style={{ height: "53%" }}
              >
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
              <div className="flex ">
                <button
                  className="hover-red mb-3 mt-3 ml-1 h-8 text-white pl-12 pr-8 w-auto border-2 rounded-bl-full hover:border-transparent cursor-pointer"
                  onClick={this.onClearCartClick.bind(this, dispatch)}
                >
                  Clear
                </button>
                <button className="hover-green mb-3 mt-3 ml-1 h-8 text-white pl-8 pr-12 w-auto border-2 rounded-br-full hover:border-transparent cursor-pointer">
                  Buy
                </button>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Cart;
