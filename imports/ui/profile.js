import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import '../style/App.css';
import Intento from './intento';

import  Guesses  from '../api/collections/guesses.js';


class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hayIntentos:true,
      intentos:this.props.intentos,
      showConfig:false,
      results: []
    }
  }

  renderIntentos() {
    let intentos = this.state.intentos;
    if(intentos.length >0) {
      return intentos.map((intento)=> {
        return (
          <Intento
            key={intento._id}
            intento={intento}
          />
        );
      });
    }
    else {
      return(<h3>No hay intentos</h3>);
    }
  }

  configClick() {
    this.setState({
      showConfig:true
    });
  }

  backClick() {
    this.setState({
      showConfig:false
    });
  }

  checkGuesses() {
    Meteor.call('guesses.check', {user: this.props.currentUser._id});
  }



  render() {
    const estaLleno = this.state.hayIntentos;
    const config = this.state.showConfig;
    return (
      <div>
        <div className='row' id="profileBackPic">
          <div className='col-md-4'>
            <div className="boxProfile">
              {
                config ?
                <div>
                  <div className='row'>
                    <button type="button" className="btn btn-default" aria-label="Configuracion" onClick={this.backClick.bind(this)}>
                      <span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className='row'>
                    <h3>Tus Datos</h3>
                  </div>
                  <div className='row'>
                    <div className="form-group">
                      <label>Nombre:</label>
                      <input type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                      <label>Foto:</label>
                      <input type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                      <label>Equipo Favorito:</label>
                      <input type="text" className="form-control"></input>
                    </div>
                  </div>
                </div>
                :
                <div>
                  <div className='row'>
                    <button type="button" className="btn btn-default" aria-label="Configuracion" onClick={this.configClick.bind(this)}>
                      <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className='row'>
                    <img alt='Imagen de Perfil' src={this.props.currentUser.profile.picture} id='profilePic' className='img-responsive'></img>
                  </div>

                  <div className='row'>
                    {
                      this.props.currentUser.profile.name?<h2>{this.props.currentUser.profile.name}</h2>:<h2>Sin nombre</h2>
                    }
                    <button type='button' className='guessButton pull-right' aria-label='Refrescar intentos' onClick={this.checkGuesses.bind(this)}>
                      <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                    </button>
                    <h4 id='profileName'>{this.props.currentUser.username}</h4>
                  </div>
                  <hr className="content-divider-profile"></hr>
                  <h4>Estadísticas:</h4>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h5 className='statsTittle'><strong>Puntaje</strong></h5>
                    </div>
                    <div className='col-md-6'>
                      <h5 className='stat'><strong>{this.props.currentUser.profile.score}</strong></h5>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h5 className='statsTittle'>Mejor Racha</h5>
                    </div>
                    <div className='col-md-6'>
                      <h5 className='stat'>{this.props.currentUser.profile.longestStreak}</h5>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <h5 className='statsTittle'>Racha actual</h5>
                    </div>
                    <div className='col-md-6'>
                      <h5 className='stat'>{this.props.currentUser.profile.currentStreak}</h5>
                    </div>
                  </div> </div>}
                </div>
              </div>
              <div className='col-md-8'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h2 id='header-historial'>Historial de Intentos</h2>
                  </div>
                </div>
                <div className='row'>
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
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
    intentos: Guesses.find({user: Meteor.userId()}).fetch()
  };
}, Profile);
