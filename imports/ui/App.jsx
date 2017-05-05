/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props
*/
import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Navegacion from './navbar';
import Landing from './landing';
import '../style/App.css';


class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <Navegacion user={this.props.currentUser} />
        </div>
        {this.props.currentUser ?
            (
              <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10">
                  {React.cloneElement(this.props.children, { ...this.state })}
                </div>
                <div className="col-md-1" />
              </div>
            ) : (
              <div className="row landing">
                <Landing />
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
