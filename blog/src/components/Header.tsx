import React, { Component } from "react";
import "./../Ui/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header-title">My Blog</h1>
        <button className="header-button">Add New</button>
      </div>
    );
  }
}
