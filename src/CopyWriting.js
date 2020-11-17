import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";

import logo from "./logo.png";

class CopyWriting extends Component {
  render() {
    return (
      <div className="container text-center">
      <h1>Copywriting</h1>
      <hr/>
      <p>Here you can see in all the copywriting, social media and editor works I have previously worked on.</p>
      <p>Clicking on one will take you to a page where you can see all my posts and all my duties I have done within that work, job or team.</p>

        <div>
         <NavLink exact to="/japondesdejapon"><img src="https://pbs.twimg.com/profile_images/1287397526472032256/pcA4ogfN.jpg" className="mx-auto img-fluid rounded-circle"/></NavLink>
         <h1>Japón desde Japón</h1>
         <p>News and Blog outlet for all things Japan.</p>
         <hr/>

         <NavLink exact to="/culturajapon"><img src={logo} className="mx-auto img-fluid rounded-circle"/></NavLink>
         <h1>Cultura Japón</h1>
         <p>Small Japan focused Blog project started in October 2020 by myself.</p>
         <hr/>

        </div>
      </div>
    );
  }
}

export default CopyWriting;
