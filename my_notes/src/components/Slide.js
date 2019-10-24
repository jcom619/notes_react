import React from 'react';
import js from '../images/javascript.png';
import py from '../images/python.png';
import jq from '../images/jquery.png';
import dj from '../images/django.png';
import wp from '../images/webpack.png';
import ssh from '../images/ssh.png';
import perf from '../images/performance.png';

const Slide = () => {
  return (

      <div id="carouselExampleIndicators" className="jumbotron container-fluid carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        </ol>
        <div className="container mb-5 carousel-inner">

          <div className="carousel-item active">

            <a href={`https://jcom619.github.io/js_notes/`}>
              <img src={js} className="d-block w-100" alt="..."/>
            </a>
            <h2 className="slideName tc">JavaScript</h2>
          </div>


          <div className="carousel-item">
            <a href={`https://jcom619.github.io/python_notes/`}>
              <img src={py} className="d-block w-100" alt="..."/>
            </a>
            <h2 className="slideName tc">Python</h2>
          </div>

          <div className="carousel-item">
            <a href={`https://jcom619.github.io/jquery_notes/`}>
              <img src={jq} className="d-block w-100" alt="..."/>
            </a>
            <h2 className="slideName tc">JQuery</h2>
          </div>

          <div className="carousel-item">
            <a href={`https://jcom619.github.io/django_notes/`}>
              <img src={dj} className="d-block w-100" alt="..."/>
            </a>
            <h2 className="slideName tc">Django</h2>
          </div>

          <div className="carousel-item">
            <a href={`https://jcom619.github.io/webpack_notes/`}>
              <img src={wp} className="d-block w-100" alt="..."/>
            </a>
            <h2 className="slideName tc">Webpack</h2>
          </div>

          <div className="carousel-item">
            <a href={`https://jcom619.github.io/ssh_notes/`}>
              <img src={ssh} className="d-block w-100" alt="..."/>
            </a>
            <h2 className="slideName tc">SSH</h2>
          </div>

          <div className="carousel-item">
            <a href={`https://jcom619.github.io/performance_notes/`}>
              <img src={perf} className="d-block w-100" alt="..."/>
            </a>
            <h2 className="slideName tc">Performance</h2>
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


  );
}


export default Slide;
