import React, { Component } from "react";
import Movies from "./components/movies/Movies";
import Sidebar from "./components/layout/Sidebar";

import { Provider } from "./context";
import "./tailwind.generated.css";
import "font-awesome/css/font-awesome.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container float-left">
            <Sidebar />
          </div>
          <div className="container float-right">
            <Movies />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
