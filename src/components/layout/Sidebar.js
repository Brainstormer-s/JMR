import React, { Component } from "react";
import Cart from "../cart/Cart";
import { Consumer } from "../../context";
class Sidebar extends Component {
  state = {
    showCartInfo: true,
  };
  showCartClick = (dispatch) =>{
    this.setState({ showCartInfo: !this.state.showCartInfo });
    dispatch({type:'MARGIN_SIDEBAR',payload:this.state.showCartInfo});
  }
  render() {
    const { showCartInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const {dispatch} = value;
          return (
            <React.Fragment>
              <div
                className="w-full justify-between visible top-0 left-0 flex fixed h-16"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
              >
                <img
                  className="ml-4 w-16"
                  src="jmr-white.png"
                  width="120"
                  alt="logo not found"
                />
                <img
                  className="cursor-pointer mt-4 mr-4 w-6 h-6"
                  src="shopping_cart.ico"
                  width="120"
                  alt="logo not found"
                  onClick={this.showCartClick.bind(this,dispatch)}
                />
              </div>
              {showCartInfo ? (
                <aside
                  className="ml-8 mr-8 md:h-100 md:ml-3 md:mr-3 md:fixed m-4 p-2 mt-20 p-3 relative shadow-2x1 rounded-lg w-64 bg-black overflow-y-visible"
                  style={{
                    height: "650px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  <Cart />
                </aside>
              ) : null}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Sidebar;
