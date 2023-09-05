import React, { Component } from 'react';
import "./../Ui/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
      <p className="p">Developed by Yavuz Yılmaz</p>
      <a href="https://www.linkedin.com/in/yavuz-yilmazz/" target="_blank" rel="noopener noreferrer">
        <button className="footer-button">Go to Linkedin</button>
      </a>
    </footer>
    );
  }
}