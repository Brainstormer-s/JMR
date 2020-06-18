import React, { Component } from "react";
import Cart from '../cart/Cart';

class Sidebar extends Component {
    render() {
        return (
            <div
                className="container mb-0 m-4 mt-3 fixed shadow-2xl rounded-lg w-64 bg-red-700 h-auto"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
                <img className="ml-16" src="JMR.png" width="120" alt="logo not found" />
                <h2 className="text-2xl mt-32 ml-24 mb-4 text-white font-medium opacity-100">
                    Cart
                </h2>
                <Cart />
            </div>
        );
    }
}

export default Sidebar;
