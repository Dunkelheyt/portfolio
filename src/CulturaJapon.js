import React, { Component } from "react";
import data from "./data";
import logo from "./logo.png";
import PostsCards from "./PostsCards";

class CulturaJapon extends Component {
  render() {
    return (
      <div className="container text-center">
      <img src={logo} className="mx-auto img-fluid rounded-circle"/>
      <h1>Cultura Japón</h1>
      <hr/>

      <h1>Posts</h1>
      <p>All the posts are of my own authority.</p>
      <p>*All the work with <i>Cultura Japón</i> was done and will be done in Spanish.</p>
      <hr/>
      <div className="row">
        {
                  data.CulturaJpn.map((jdj) => {
                    return (
                      <PostsCards jdj = {jdj}/>
                    );
                  })
                }
      </div>
        </div>
    );
  }
}

export default CulturaJapon;
