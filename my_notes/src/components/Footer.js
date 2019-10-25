import React from 'react';

const Footer = () => {
  return (
    <div>
      <nav className="center navbar fixed-bottom animated zoomIn">
        <div className="center d-flex justify-content-around">
          <div className="d-flex">
            <div className="btn-group dropup">
            <button type="button"
                    className="btn btn-secondary dropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
               Contact Developer
            </button>
            <div className="center dropdown-menu">
              <a className="dropdown-item"
                 href={`https://github.com/jcom619/`}
                 target="_blank"
                 rel="noopener noreferrer">
                GitHub
              </a>
              <a className="dropdown-item"
                 href={`https://www.linkedin.com/in/joshua-compton-coder/`}
                 target="_blank"
                 rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
