import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import '../style/App.css';

class Leaderboard extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    var i = 0;
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Leaderboard</h1>
          </div>
        </div>
        <hr className="content-divider"></hr>
        <div className='row'>
          <div className='col-md-12'>
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
                    return b.profile.score - a.profile.score
                  }).map((user) => {
                    i++;
                    return(
                      <tr key={i}>
                        <th scope="row" key={i+1}>{i}</th>
                        <td key={i+2}>{user.username}</td>
                        <td key={i+3}>{user.profile.score}</td>
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
  users: PropTypes.array
};

export default createContainer(() => {
  return {
    users: Meteor.users.find({}).fetch()
  };
}, Leaderboard);
