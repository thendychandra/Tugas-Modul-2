import React, { Component } from "react";
export default class Quotes extends Component {
  render() {
    return (
      <div className="C">
        <div
          className="flex items-center justify-center bg-gray-100"
          style={{ height: "100vh" }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            <img className="mx-auto" src={this.props.image}></img>
            <span className="block">{this.props.header}</span>
            <span className="block text-indigo-600">Modul 2</span>
            <p className="text-center text-gray-700 font-normal">
              {this.props.header_desc}
            </p>
          </h2>
        </div>
      </div>
    );
  }
}
