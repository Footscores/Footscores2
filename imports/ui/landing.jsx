/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props, react/prefer-stateless-function
*/
import React, { Component } from 'react';
import '../style/App.css';

class Landing extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <h1>Bienvenido a FootScores!</h1>
          </div>
        </div>
        <hr className="content-divider" />
        <div className="row">
          <div className="col-md-12">
            <h3>Regístrate o inicia sesión!</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
