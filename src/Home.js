import React, { Component } from "react";
import {
   Link
} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
        <img className="rounded-circle centeredimgprofile border-dark border" src="https://scontent.fhmo2-2.fna.fbcdn.net/v/t31.0-8/s960x960/22829202_10211833960823634_4029705302994154056_o.jpg?_nc_cat=109&ccb=2&_nc_sid=85a577&_nc_eui2=AeHNAduRvtyruYJFceqCp173CJ1_tBk7aY4InX-0GTtpjlQ50uXdMRn-HcUyXMY9REo&_nc_ohc=jmDTPlp4QEUAX9HMcoZ&_nc_ht=scontent.fhmo2-2.fna&tp=7&oh=1c8c8d047e14ecad607214bd3d6bd3f9&oe=5FD74214"/>
        </div>
        <h1 className="text-center">Diego Almada Osuna</h1>
        <hr/>
        <p>Hey there, I’m Diego, I’m from Mexico, a Systems Engineer and avid language lover.</p>
        <p>Since I was child I had a huge interest in learning languages, especially English and French, even though I haven’t learned French, I went abroad to France to an Engineer School and learnt some of it.</p>

        <p>Nowadays I’m learning Japanese and trying to get the best of it.
        Also, I’m doing freelance jobs, which include: <b><l>game translation/localization</l></b>, <b><l>product placement</l></b>, <b><l>promotional material localization and translation</l></b>, <b><l>Linguistic Quality Assurance</l></b> and <b><l>Quality Assurance</l></b>.</p>

        <p>If you wish to know some of my translation works I have done, please follow this <Link to="/translations">link this will take you to my portfolio</Link>.</p>

        <p>Additionally, I’m doing some copywriting in my freetime. If you wish to see what I have previously worked on, this <Link exact to="/copywriting">link will take you there</Link>.</p>

        <br/><br/><br/><br/><br/>
      </div>
    );
  }
}

export default Home;
