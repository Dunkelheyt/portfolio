import React, { Component } from "react";

class Cards extends Component {
  render(){
    const { translation } = this.props; // ES6 destructuring
    return(
    <div className="col-lg-4 col-md-6 col-sm-6">
    <h3 className="center">{translation.gamename}</h3>
     <div className="card border-dark">
        <img src={translation.gameimg} className="card-img-top centeredimg" alt="test"/>
        <div className="card-body">
          <p className="card-text"><b>Genre: </b>{translation.gamegenre}</p>
          <p className="card-text"><b>Made by: </b><a href={translation.gameurl}>{translation.gamea}</a></p>
        </div>
      </div>
      <br/>
    </div>
  );
  }
}


export default Cards;
