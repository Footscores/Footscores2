/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props, react/prefer-stateless-function
*/
import React, { Component } from 'react';
import '../style/App.css';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Bienvenido a FootScores</h1>
          </div>
        </div>
        <hr className="content-divider" />
        <div className="row">
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <h3>¿Como usar FootScores?</h3>
                <hr className="content-divider" />
                <ul>
                  <li>Ve a la sección de Ligas</li>
                  <li>Selecciona una liga para ver los partidos disponibles</li>
                  <li>Adivina cuanto van a quedar!</li>
                  <li>Una vez pasen los partidos, ve a tu perfil y da
                    click al botón verde de refrescar para recalcular tu puntaje</li>
                  <li>Gana 10 puntos por cada marcador que aciertes, y mira como avanzas
                    en el Leaderboard!</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <img alt="estadio" className="img-home img-circle img-responsive pull-right" src="img/estadio.jpg" />
            </div>
          </div>
          <hr className="content-divider" />
          <div className="row">
            <div className="col-md-6">
              <img alt="balon" className="img-home img-circle img-responsive  pull-left" src="img/balon.jpg" />
            </div>
            <div className="col-md-6">
              <div className="box">
                <h3>¿Como funciona FootScores?</h3>
                <hr className="content-divider" />
                <p>En FootScores trabajamos para brindarte la mejor experiencia posible.
                  Nuestro servidor se conecta constantemente con un API y obtiene
                  los próximos partidos de las mejores competencias! Todos los intentos que
                  los usuarios ingresen en la página web son almacenados, y el cliente puede
                  volver para recalcular su puntaje, lo cual actualiza inmediatamente
                  el leaderboard.</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="content-divider" />
      </div>
    );
  }
}
export default Home;
