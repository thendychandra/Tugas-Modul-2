import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div
        className="flex flex-col items-center justify-center bg-gray-100 shadow-md pb-6"
        style={{ height: "200px" }}
      >
        <h3 className="py-6 font-bold text-xl">{this.props.quotes}</h3>
        <img className="w-20 h-30 mx-auto" src={this.props.image}></img>
        <p>-{this.props.author}-</p>
      </div>
    );
  }
}
