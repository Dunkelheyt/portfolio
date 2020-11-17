import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Translations from "./Translations";
import Header from './Header';
import CopyWriting from './CopyWriting';
import Contact from './Contact';
import JaponDesdeJapon from './JaponDesdeJapon';
import CulturaJapon from './CulturaJapon';
import Footer from './Footer';

import ScrollToTop from "react-scroll-up";
import arrow from "./arrow.png";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="">
        <Header/>
          <div className="content gray">
          <ScrollToTop showUnder={160}>
          <span><img className="miniimg" src={arrow}/></span>
          </ScrollToTop>
            <Route exact path="/" component={Home}/>
            <Route path="/translations" component={Translations}/>
            <Route path="/copywriting" component={CopyWriting}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/japondesdejapon" component={JaponDesdeJapon}/>
            <Route path="/culturajapon" component={CulturaJapon}/>
          </div>
        </div>
        <Footer/>
      </HashRouter>
    );
  }
}

export default Main;
