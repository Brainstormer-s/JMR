import React, { Component } from "react";
import Cart from "../cart/Cart";
class Sidebar extends Component {
  render() {
    return (
      <aside
        className="m-4 p-2  fixed shadow-2x1 rounded-lg w-64 bg-black invisible md:visible "
        style={{ height: "90%", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div
          className="w-full justify-between visible top-0 left-0 flex  fixed h-16 md:invisible"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <img
            className="ml-4 w-16"
            src="jmr-white.png"
            width="120"
            alt="logo not found"
          />
          <img
            className="mt-4 mr-4 w-6 h-6"
            src="shopping_cart.ico"
            width="120"
            alt="logo not found"
          />
        </div>

        <img
          className="ml-16 mr-16 w-24"
          src="jmr-white.png"
          alt="logo not found"
          style={{ marginLeft: "4.4rem" }}
        />
        <Cart />
      </aside>
    );
  }
}

export default Sidebar;
