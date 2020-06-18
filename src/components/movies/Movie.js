import React, { Component } from 'react'

class Movie extends Component {
 render() {
  return (
   <div className="poster">
    <div className="overlay">
     <div className="items"></div>
     <div className="items head">
      <p className="text-center capitalize">{this.props.title}</p>
      <hr />
     </div>
     <div className="items price">
      <p>{this.props.price}</p>
      <p>{this.props.size}</p>
     </div>
     <div className="items cart">
      <i className="fa fa-shopping-cart"></i>
     </div>
    </div>
   </div>
  )
 }
}

export default Movie;
