import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function Simpletheme() {
  const { darkMode, onThemeChange, theme } = useContext(ThemeContext);

  return (
    <center>
      <div style={theme}>
        <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
          <div className="container-fluid">
            <a className="navbar-brand">
              <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Pricing</a>
                </li>
                <button onClick={onThemeChange}>
                  {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              </ul>
            </div>
          </div>
        </nav>
        <h1>Welcome to Theme Changer App!</h1>
      </div>
    </center>
  );
}

export default Simpletheme;
