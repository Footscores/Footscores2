/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props, react/prefer-stateless-function, react/no-unused-prop-types,
jsx-a11y/no-static-element-interactions, react/jsx-first-prop-new-line, no-else-return,
react/jsx-no-bind, jsx-a11y/label-has-for
*/
import React, { Component } from 'react';
import '../style/App.css';

class Welcome extends Component {

  /*  constructor(props)
  {
  super(props)
}*/

  render() {
    return (
      <div>
        <div className="row welcome">
          <div className="col-md-12">
            <h1>¡Bienvenido a FootScores!</h1>
            <h3>Un lugar donde puedes adivinar el resultado de los mejores partidos</h3>
          </div>
        </div>
        <hr className="content-divider" />
        <div className="row">
          <div className="col-md-12">
            <div className="row welcome">
              <h4>Contamos con las mejores competencias del mundo:</h4>
            </div>
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <ul id="welcome-list">
                  <li>Champions League</li>
                  <li>Premiere League</li>
                  <li>Liga Santander</li>
                  <li>Bundesliga</li>
                  <li>Serie A</li>
                  <li>.. y muchas más!</li>
                </ul>
              </div>
              <div className="col-md-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
