import React, { Component } from 'react';
import Header from '../components/Header';
import Slide from '../components/Slide';
import 'tachyons';
import '../static/Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Slide/>
      </div>
    );
  }
}

export default Homepage;
