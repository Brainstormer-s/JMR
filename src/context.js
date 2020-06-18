import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "DELETE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    cart: [
      {
        id: 1,
        title: "spider man : homecoming",
        size: "945 MB",
        price: "2 Birr",
      },
      {
        id: 2,
        title: "spider man 2 : far from home",
        size: "1.6 GB",
        price: "2 Birr",
      },
      {
        id: 3,
        title: "alien expedition",
        size: "2.4 GB",
        price: "2 Birr",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
