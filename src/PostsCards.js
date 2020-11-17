import React, { Component } from "react";

class PostsCards extends Component {
  render(){
    const { jdj } = this.props; // ES6 destructuring
    return(
    <div className="col-lg-4 col-md-6 col-sm-6">
     <div className="card border-dark">
        <img src={jdj.postimg} className="card-img-top centeredimg" alt="test"/>
        <div className="card-body">
          <p className="card-text"><b>Title: </b><a href={jdj.postlink}>{jdj.postname}</a></p>
        </div>
      </div>
      <br/>
    </div>
  );
  }
}


export default PostsCards;
