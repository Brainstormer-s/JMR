import React, { Component } from "react";
import Sidebar from "./components/layout/Sidebar";
import MovieCollection from "./components/movies/MovieCollection";
import Provider from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="thebg fixed bg-fixed top-0 left-0  w-full h-full bg-cover"></div>
          <div className=" z-40 md:h-10 ">
            <Sidebar />
          </div>
          <div className="z-20 pt-16 md:pt-0 self-center pr-2 md:ml-64">
            <MovieCollection />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
