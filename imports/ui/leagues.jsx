/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props, react/prefer-stateless-function, react/no-unused-prop-types,
jsx-a11y/no-static-element-interactions, react/jsx-first-prop-new-line
*/
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import '../style/App.css';
import Partido from './partido.js';

import Guesses from '../api/collections/guesses.js';

function isAvailable(fixture, guesses) {
  let available = true;
  for (let i = 0; i < guesses.length && available; i++) {
    const homeTeam = fixture.homeTeamName === guesses[i].homeTeam;
    const awayTeam = fixture.awayTeamName === guesses[i].awayTeam;
    const unchecked = guesses[i].correct === null || guesses[i].correct === undefined;
    if (homeTeam && awayTeam && unchecked) {
      available = false;
    }
  }
  return available;
}

class Leagues extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liga: [],
      lleno: true,
      cargando: false,
    };
  }

  getFixturesLeague(leagueCode) {
    this.setState({
      cargando: true,
    });
    Meteor.call('api.nextWeekCompetition', { id: leagueCode }, (err, fixtures) => {
      if (fixtures.length > 0) {
        this.setState({
          lleno: true,
          liga: fixtures.filter((fixture) => {
            return isAvailable(fixture, this.props.guesses);
          }),
          cargando: false,
        });
      } else {
        this.setState({
          liga: [],
          lleno: false,
          cargando: false,
        });
      }
    });
  }

  render() {
    const estaLleno = this.state.lleno;
    const cargo = this.state.cargando;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Partidos de la semana</h1>
          </div>
        </div>
        <hr className="content-divider" />
        <div className="row">
          <div className="col-md-12">
            <h3>Seleccione la competencia</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la liga santander" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('PD')} onClick={() => this.getFixturesLeague('PD')} alt="logo de la liga Santander" className="img-league img-circle img-responsive"
                  src="img/leagues/ligaSantander.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la premier lig" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('PL')} onClick={() => this.getFixturesLeague('PL')} alt="logo de la premier league" className="img-league img-circle img-responsive"
                  src="img/leagues/premier.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la bundesliga" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('BL1')} onClick={() => this.getFixturesLeague('BL1')} alt="logo de la bundesliga" className="img-league img-circle img-responsive"
                  src="img/leagues/bundesliga.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la champions lig" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('CL')} onClick={() => this.getFixturesLeague('CL')} alt="logo de la Champions League" className="img-league img-circle img-responsive"
                  src="img/leagues/uefa.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la serie a italiana" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('SA')} onClick={() => this.getFixturesLeague('SA')} alt="logo de la serie A italiana" className="img-league img-circle img-responsive"
                  src="img/leagues/serieA.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la primeira liga" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('PPL')} onClick={() => this.getFixturesLeague('PPL')} alt="logo de la primeira liga" className="img-league img-circle img-responsive"
                  src="img/leagues/primeiraLiga.jpg"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la copa del rey" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('CDR')} onClick={() => this.getFixturesLeague('CDR')} alt="logo de la copa del rey" className="img-league img-circle img-responsive"
                  src="img/leagues/copadelrey.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la Facup" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('FAC')} onClick={() => this.getFixturesLeague('FAC')} alt="logo de la FaCup" className="img-league img-circle img-responsive"
                  src="img/leagues/FaCup.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la liga pokal" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('DFB')} onClick={() => this.getFixturesLeague('DFB')} alt="logo de la pokal liga" className="img-league img-circle img-responsive"
                  src="img/leagues/pokal.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la copa uefa" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('EL')} onClick={() => this.getFixturesLeague('EL')} alt="logo de la uefa cup" className="img-league img-circle img-responsive"
                  src="img/leagues/uefacup.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la ligue 1" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('FL1')} onClick={() => this.getFixturesLeague('FL1')} alt="logo de la Ligue 1" className="img-league img-circle img-responsive"
                  src="img/leagues/ligue1.jpg"
                />
              </div>
              <div className="col-md-2">
                <img role="button" tabIndex="0" aria-label="Boton para acceder a la liga eredivisie" onKeyPress={event => (event.charCode === '13') && this.getFixturesLeague('DED')} onClick={() => this.getFixturesLeague('DED')} alt="logo de la liga eredivisie" className="img-league img-circle img-responsive"
                  src="img/leagues/erdivisie.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="content-divider" />
        <div className="row">
          {
          cargo ? (
            <div className="col-md-12">
              <div className="loader" />
            </div>
          ) : (
            <div />
          )}
        </div>
        <div className="row">
          {
          estaLleno ? (
            this.state.liga.map((partido) => {
              return <Partido key={partido.id} partido={partido} />;
            })
          ) : (
            <h3>No hay partidos disponibles para esta liga, selecciona otra!</h3>
        )}
        </div>
      </div>
    );
  }
}

Leagues.propTypes = {
  currentUser: PropTypes.object,
  guesses: PropTypes.array,
};

export default createContainer(() => {
  Meteor.subscribe('guesses');
  return {
    currentUser: Meteor.user(),
    guesses: Guesses.find({ user: Meteor.userId() }).fetch(),
  };
}, Leagues);
