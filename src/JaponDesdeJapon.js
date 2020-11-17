import React, { Component } from "react";
import data from "./data";
import PostsCards from "./PostsCards";

class JaponDesdeJapon extends Component {
  render() {
    return (
      <div className="container text-center">
      <img src="https://pbs.twimg.com/profile_images/1287397526472032256/pcA4ogfN.jpg" className="mx-auto img-fluid rounded-circle"/>
      <h1>Japón Desde Japón</h1>
      <hr/>
      <p>I have worked in “Japón desde Japón” since <i>March 2020</i> up to this day.
      Learning all the ins and outs of the team’s vision and mission, and also giving my own ideas to create more content to attract more Spanish people to get to know the real Japan.</p>
      <p>My duties in “Japón desde Japón” are the following:</p>
      <ul>
      <li>Community Manager</li>
      <li>Graphic Design</li>
      <li>Copywriter</li>
      <li>Editor</li>
      </ul>
      <h1>Posts</h1>
      <p>All the posts are of my own authority.</p>
      <p>*All the work with Japón desde Japón was done and will be done in Spanish.</p>
      <hr/>
      <div className="row">
        {
                  data.JdJ.map((jdj) => {
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

export default JaponDesdeJapon;
