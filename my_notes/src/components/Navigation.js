import React from 'react';

const Navigation = () => {
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="d-flex justify-content-around">
          <div className="d-flex">
            <div className="dropdown mr-1">
              <button type="button"
                      className="btn btn-lg btn-outline-secondary dropdown-toggle"
                      id="dropdownMenuOffset"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-offset="20,20">
                M E N U
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <a className="dropdown-item"
                   href={`https://jcom619.github.io/js_notes/`}
                   target="_blank" rel="noopener noreferrer">
                  Java Script
                </a>
                <a className="dropdown-item"
                   href={`https://jcom619.github.io/python_notes/`}
                   target="_blank"
                   rel="noopener noreferrer">
                  Python
                </a>
                <a className="dropdown-item"
                   href={`https://jcom619.github.io/django_notes/`}
                   target="_blank"
                   rel="noopener noreferrer">
                  Django
                </a>

              </div>
            </div>
            </div>
        </div>

      </nav>
    </div>
  );
}

export default Navigation;
