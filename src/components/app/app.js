import React, { Component } from 'react';
import './app.css';

import Header from "../header";
import Footer from "../footer";
import RandomCurse from "../random-curse";

export default class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <RandomCurse />
            <Footer />
        </div>
    );
  };
};
