import React, { Component } from "react";
import Sidebar from "./components/layout/Sidebar";
import MovieCollection from "./components/movies/MovieCollection";
import Provider from "./context";
import { Consumer } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {(value) => {
            const {marginOfSidebar} = value;
            return (
              <div className="App">
                <div className="thebg fixed bg-fixed top-0 left-0  w-full h-full bg-cover"></div>
                <div className=" z-40 md:h-10 ">
                  <Sidebar />
                </div>
                <div className={marginOfSidebar}>
                  <MovieCollection />
                </div>
              </div>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}
export default App;
