import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

import "../footer/Footer.scss";

class Footer extends Component {
  showCurrentYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <div className="footer d-flex align-items-center">
        <section className="container-fluid">
          <div className="row">
            <div className="col">
              Copyright Stuttgart GAA {this.showCurrentYear()} - All rights
              reserved.
            </div>
            <div className="col">
              {/* <div className="float-right">
                <div className="ml-auto">
                  <NavLink to="/" exact>
                    Home
                  </NavLink>
                  {"  "}
                  <NavLink to="/about">About</NavLink>
                  {"  "}
                  <NavLink to="/training">Training</NavLink>
                  {"  "}
                  <NavLink to="/news">News</NavLink>
                  {"  "}
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Footer;
