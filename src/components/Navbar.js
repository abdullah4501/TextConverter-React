import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/"className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about"className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className={`form-check-label text-${props.mode==='light'? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'? 'Enable' : 'Disable'} dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };