import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/resources/admin-settings-male.png";
import adminProfileIcon from "../../src/resources/user-check.svg";
import createbusIcon from "../../src/resources/file-plus.svg";
import busListIcon from "../../src/resources/book-open.svg";
import signOutIcon from "../../src/resources/log-out.svg";
import style from "../../src/style.module.css/admin.style.css";

export default class AdminNavigationBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              width="63"
              height="62"
              className="d-inline-block align-top"
              alt="admin-logo"
            />
          </a>
          <a className="navbar-brand" href="/">
            <h2>Admin</h2>
          </a>
          {/* <Link to="/" className="navbar-brand">
            <h2 className="navbar-brand">Admin</h2>
          </Link> */}

          <div className={`collapse  navbar-collapse ${style.navIcons} `}>
            <ul className="navbar-nav  mx-auto">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;
              <li className="navbar-item">
                <Link to="/adminProfile" className="nav-link">
                  <img src={adminProfileIcon} alt="adminProfileIcon" />
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/buslist" className="nav-link">
                  <img src={busListIcon} alt="busListIcon" />
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <li className="navbar-item">
                <Link to="/addbus" className="nav-link">
                  <img src={createbusIcon} alt="createbusIcon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="collapse  navbar-collapse ">
            <ul className="navbar-nav  ml-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  <img src={signOutIcon} alt="signOutIcon" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}