import React, { Component } from "react";
import "./Header.css"; // CSS dosyasını içe aktarın

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header-title">My Blog</h1>
        <button className="header-button">Add New</button>
        <button className="header-button">Delete</button>
        <button className="header-button">Update</button>
      </div>
    );
  }
}
