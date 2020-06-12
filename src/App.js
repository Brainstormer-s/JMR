import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="float-left">
          <div
            class="container mb-0 m-4 mt-3 fixed shadow-2xl rounded-lg w-64 bg-red-700 h-auto"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <img class="ml-16" src="JMR.png" width="120" alt="logo not found" />
            <h2
              class="text-2xl mt-32 ml-24 mb-4 text-white font-medium opacity-100"
            >
              Cart
        </h2>
            <div
              class="ml-4 bg-gray-400 p-1 text-white w-56 rounded-sm opacity-100 overflow-y-auto scrolling-auto"
              style={{ height: "25vmax" }}
            >
              <h5 class="bg-blue-600 mt-2 h-8 pl-3 hover:bg-blue-800">
                Most Wanted
          </h5>
              <h5 class="bg-blue-600 mt-2 h-8 pl-3 hover:bg-blue-800">
                Catching Ray
          </h5>
              <h5 class="bg-blue-600 mt-2 h-8 pl-3 hover:bg-blue-800">
                Mocking Bird
          </h5>
            </div>
            <div class="flex">
              <div
                class="mb-3 mt-3 h-8 text-white pl-10 pr-8 w-auto border-2 rounded-bl-full ml-5 hover:bg-red-700 hover:border-transparent cursor-pointer"
              >
                Clear
          </div>
              <div
                class="mb-3 mt-3 h-8 text-white pl-8 pr-10 w-auto border-2 rounded-br-full ml-1 hover:bg-green-700 hover:border-transparent cursor-pointer"
              >
                Buy
          </div>
            </div>
          </div>
        </div>

        <div
          class="z-40 pt-10 text-white new"
          style={{ width: "80%", marginLeft: "320px" }}
        >
          <div class="card h-64 w-48" style={{ backgroundColor: "#000", color: "#fff" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class="card h-64 w-48" style={{ backgroundColor: "#262627", color: "white" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class="card h-64 w-48" style={{ backgroundColor: "#262627", color: "white" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class="card h-64 w-48" style={{ backgroundColor: "#262627", color: "white" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class="card h-64 w-48" style={{ backgroundColor: "#262627", color: "white" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class="card h-64 w-48" style={{ backgroundColor: "#262627", color: "white" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class="card h-64 w-48" style={{ backgroundColor: "#262627", color: "white" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class="card h-64 w-48" style={{ backgroundColor: "#262627", color: "white" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
          <div class="card h-64 w-48" style={{ backgroundColor: "#262627", color: "white" }}>
            <div class="multi-button">
              <button class="fas abc">2 Birr</button>
              <button class="fas aac">0.9 GB</button>
              <button class="fa fa-plus aaa"></button>
            </div>
            <div class="container">
              <img src="alien.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
