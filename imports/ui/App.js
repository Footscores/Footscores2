import axios from 'axios';
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Modal from 'react-modal';
import Navegacion from './navbar';
import Landing from './landing';
import '../style/App.css';


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
          {this.props.currentUser ?
            (
              <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                  {React.cloneElement(this.props.children, {...this.state})}
                </div>
                <div className='col-md-1'></div>
              </div>
            ):(
              <div className='row landing'>
                <Landing/>
              </div>
            )}
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
