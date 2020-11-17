import React, { Component } from "react";
import data from "./data";
import Cards from "./Cards";


class Translations extends Component {
  render() {
    return (
      <div className="container text-center">
      <h1>Portfolio</h1>
      <hr/>
      <p>Here you can see all the games I have previously worked on.
In addition to the translation or localization, I do run tests to check the quality of the script and the compatibility with the target audience (Latin America).</p>
      <p>Also, I do <i><b>Linguistic Quality Assurance (LQA)</b></i> to check if there are any grammatical errors, bugs, or if something needs a change.
In addition to the game’s script translation/localization, I do provide translations for the following items:</p>
      <ul>
      <li>Promotional materials</li>
      <li>Storefront descriptions</li>
      <li>Webpages and manuals</li>
      </ul>
        <div className="row">
          {
          					data.Translations.map((translation) => {
          						return (
                        <Cards translation = {translation}/>
          						);
          					})
          				}
        </div>
      </div>
    );
  }
}

export default Translations;
