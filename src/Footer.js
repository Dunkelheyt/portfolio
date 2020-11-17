import React, { Component } from "react";
import {
  NavLink, Link
} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer navbar-fixed-bottom">
      <div className="container text-center">
      <p><b>Sitemap:</b></p>
      <div className="row">
      <div class="col-6 col-sm-3"><Link exact to="/">Home</Link ></div>
      <div class="col-6 col-sm-3"><Link to="/translations">Game Translations</Link ></div>
      <div class="col-6 col-sm-3"><Link exact to="/copywriting">Copywriting</Link ></div>
      <div class="col-6 col-sm-3"><Link exact to="/contact">Contact</Link ></div>
      </div>
      </div>
      </div>
    );
  }
}

export default Footer;
