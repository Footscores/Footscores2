import axios from 'axios';
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Modal from 'react-modal';
import Navegacion from './navbar';
import '../style/App.css';

import football from '../api/football-data.js';

const URL="https://footscores.herokuapp.com";


class App extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <div className='row'>
          <Navegacion user= {this.props.currentUser}/>
        </div>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          {this.props.currentUser ?
            (
              <div className='col-md-10'>
                {React.cloneElement(this.props.children, {...this.state})}
              </div>
            ):(
              <div className='col-md-10'>
                <div className='row'>
                  <div className='col-md-12'>
                    <h1>Bienvenido a FootScores!</h1>
                  </div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                  <div className='col-md-12'>
                    <h3>Regístrate o inicia sesión!</h3>
                  </div>
                </div>
              </div>
            )}
          <div className='col-md-1'></div>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, App);
