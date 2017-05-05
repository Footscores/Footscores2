/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props, react/prefer-stateless-function, class-methods-use-this
*/
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

class Leaderboard extends Component {

  checkUser(currUser) {
    if (Meteor.user().username === currUser.username) {
      return 'current';
    }
    return '';
  }

  render() {
    let i = 0;
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h1>Leaderboard</h1>
          </div>
        </div>
        <hr className="content-divider" />
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Puntaje</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.users.sort((a, b) => {
                    return b.profile.score - a.profile.score;
                  }).map((user) => {
                    i++;
                    return (
                      <tr key={i} className={this.checkUser(user)}>
                        <th scope="row" key={i + 1}>{i}</th>
                        <td key={i + 2}>{user.username}</td>
                        <td key={i + 3}>{user.profile.score}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
Leaderboard.propTypes = {
  users: PropTypes.array,
};

export default createContainer(() => {
  Meteor.subscribe('allusers');
  return {
    users: Meteor.users.find({}).fetch(),
  };
}, Leaderboard);
