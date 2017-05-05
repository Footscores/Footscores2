/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props, react/prefer-stateless-function, react/no-unused-prop-types,
jsx-a11y/no-static-element-interactions, react/jsx-first-prop-new-line, no-else-return,
react/jsx-no-bind, jsx-a11y/label-has-for
*/
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import '../style/App.css';
import Intento from './intento';

import Guesses from '../api/collections/guesses.js';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hayIntentos: true,
      intentos: this.props.intentos,
      showConfig: false,
      results: [],
    };
  }

  checkGuesses() {
    Meteor.call('guesses.check', {});
    this.setState({
      intentos: this.props.intentos,
    });
  }

  configClick() {
    this.setState({
      showConfig: true,
    });
  }

  backClick() {
    this.setState({
      showConfig: false,
    });
  }

  renderIntentos() {
    const intentos = this.props.intentos;
    if (intentos.length > 0) {
      return intentos.map((intento) => {
        return (
          <Intento
            key={intento._id}
            intento={intento}
          />
        );
      });
    } else {
      return (<h3>No hay intentos</h3>);
    }
  }

  render() {
    const config = this.state.showConfig;
    return (
      <div>
        <div className="row" id="profileBackPic">
          <div className="col-md-4">
            <div className="boxProfile">
              {
                config ?
                  <div>
                    <div className="row">
                      <button type="button" className="btn btn-default" aria-label="Configuracion" onClick={this.backClick.bind(this)}>
                        <span className="glyphicon glyphicon-arrow-left" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="row">
                      <h3>Tus Datos</h3>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <label>Nombre:</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Foto:</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Equipo Favorito:</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                :
                  <div>
                    <div className="row">
                      <button type="button" className="btn btn-default" aria-label="Configuracion" onClick={this.configClick.bind(this)}>
                        <span className="glyphicon glyphicon-cog" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="row">
                      <img alt="Imagen de Perfil" src={this.props.currentUser.profile.picture} id="profilePic" className="img-responsive" />
                    </div>
                    <div className="row">
                      {
                        this.props.currentUser.profile.name ?
                          <h2>{this.props.currentUser.profile.name}</h2> : <h2>Sin nombre</h2>
                      }
                      <button type="button" className="guessButton pull-right" aria-label="Refrescar intentos" onClick={this.checkGuesses.bind(this)}>
                        <span className="glyphicon glyphicon-refresh" aria-hidden="true" />
                      </button>
                      <h4 id="profileName">{this.props.currentUser.username}</h4>
                    </div>
                    <hr className="content-divider-profile" />
                    <h4>Estadísticas:</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="statsTittle"><strong>Puntaje</strong></h5>
                      </div>
                      <div className="col-md-6">
                        <h5 className="stat"><strong>{this.props.currentUser.profile.score}</strong></h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="statsTittle">Mejor Racha</h5>
                      </div>
                      <div className="col-md-6">
                        <h5 className="stat">{this.props.currentUser.profile.longestStreak}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="statsTittle">Racha actual</h5>
                      </div>
                      <div className="col-md-6">
                        <h5 className="stat">{this.props.currentUser.profile.currentStreak}</h5>
                      </div>
                    </div> </div>}
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h2 id="header-historial">Historial de Intentos</h2>
              </div>
            </div>
            <div className="row">
              {this.renderIntentos()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object,
  intentos: PropTypes.array,
};

export default createContainer(() => {
  Meteor.subscribe('guesses');
  return {
    currentUser: Meteor.user(),
    intentos: Guesses.find({ user: Meteor.userId() }).fetch(),
  };
}, Profile);
