import React, { Component } from "react";
import MyForm from "./MyForm";

class Contact extends Component {
  render() {
    return (
      <div className="container text-center">
      <h1>Contact</h1>
      <hr/>
      <p>Using the following form you can contact me.</p>
      <p>Either you can use the following contact or contact me via <a href="https://twitter.com/Dunkelheyt">Twitter (@Dunkelheyt)</a>.</p>
      <MyForm/>

      <br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
}

export default Contact;
