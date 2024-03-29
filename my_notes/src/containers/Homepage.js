import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Slide from '../components/Slide';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

import 'tachyons';
import '../static/Homepage.css';
import '../static/animate.css';

class Homepage extends Component {
  render() {
    return (
      <div className="App">

          <Navigation/>
          <Header/>
          <Slide />
          <Logo/>
          <Footer/>

      </div>
    );
  }
}

export default Homepage;
