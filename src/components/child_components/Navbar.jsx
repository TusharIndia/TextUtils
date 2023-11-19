import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} px-2`}
      >
        <a href="#" className={`navbar-brand text-${props.mode==="light"?'dark':'light'}`} >
          {props.title}
        </a>
        {/* <Link to="/" className={`navbar-brand text-${props.mode==="light"?'dark':'light'}`} >
          {props.title}
        </Link> */}

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a href="#" className={`nav-link text-${props.mode==="light"?'dark':'light'}`} >
                Home
              </a>
              {/* <Link to="/about" className={`nav-link text-${props.mode==="light"?'dark':'light'}`} >
                About
              </Link> */}
            </li>
          </ul>
        </div> 
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={props.togglemode}
          />
          <label className={`form-check-label text-${props.mode==="light"?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
        <div className="form-check form-switch">
          <button className={`btn form-check-label text-${props.mode==="light"?'dark':'light'}`} onClick={props.togglegmode} htmlFor="flexSwitchCheckDefault">
            Green
          </button>
        </div>
        <div className="form-check form-switch">
          <button className={`btn form-check-label text-${props.mode==="light"?'dark':'light'}`} onClick={props.togglebmode} htmlFor="flexSwitchCheckDefault">
            Blue
          </button>
        </div>
        <div className="form-check form-switch">
          <button className={`btn form-check-label text-${props.mode==="light"?'dark':'light'}`} onClick={props.togglermode} htmlFor="flexSwitchCheckDefault">
            Red
          </button>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: "set text" };
