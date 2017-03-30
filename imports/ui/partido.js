import React, {Component, PropTypes} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import '../style/App.css';

class Partido extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homeGoals: '',
      awayGoals: '',
      send: false,
      homeGoalsSent: '',
      awayGoalsSent: ''
    }
  }
  setHomeGoals(event) {
    this.setState({homeGoals: event.target.value}, function() {
      console.log(this.state);
    });
  }
  setAwayGoals(event) {
    this.setState({awayGoals: event.target.value}, function() {
      console.log(this.state);
    });
  }
  postGuess(event) {
    if(this.state.homeGoals ==='' || this.state.awayGoals ==='') {
      window.alert('Debes ingresar un valor');
    } else {
      let homeTeamScore = parseInt(this.state.homeGoals,10);
      let awayTeamScore = parseInt(this.state.awayGoals,10);

      Meteor.call('guesses.insert', {
        date: this.props.partido.date,
        homeTeam: this.props.partido.homeTeamName,
        awayTeam: this.props.partido.awayTeamName,
        homeTeamScore,
        awayTeamScore
      }, (err, response) => {
        if(!err) {
          this.setState({
            homeGoals: '',
            awayGoals: '',
            send: true,
            homeGoalsSent: this.state.homeGoals,
            awayGoalsSent: this.state.awayGoals
          });
        }
      });
    }
  }

  render() {
    const envio = this.state.send;
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='row'>
            <table className='table-matches'>
              <tbody>
                <tr>
                  <td className='col-md-4 col-xs-3 matches'>{this.props.partido.homeTeamName}</td>
                  <td className='col-md-4 col-xs-6 matches'>
                    <div className='row'>
                      <span className='col-md-4 col-xs-0'></span>
                      {envio ? (
                        <div className='col-md-4'>
                          <div className='row'>
                            <p>Buena Suerte!</p>
                          </div>
                          <div className='row'>
                            <span className='col-md-12 user-guess'>{this.state.homeGoalsSent} - {this.state.awayGoalsSent}</span>
                          </div>
                        </div>

                      )
                      : (<form>
                        <div className='row'>
                          {
                            /*Estos inputs deberían tener aria label para ser  más accesibles*/
                          }
                          <input className='col-md-2 col-xs-6' type="number" name="homeGoals" onChange={this.setHomeGoals.bind(this)}></input>
                          <input className='col-md-2 col-xs-6' type="number" name="awayGoals" onChange={this.setAwayGoals.bind(this)}></input>
                        </div>
                        <div className='row'>
                          {/* <input type="text" onChange={(event) => {
                            this.setState({
                            user: event.target.value
                          })
                        }}/> */}
                        <button type='button' className='guessButton' onClick={this.postGuess.bind(this)}>Enviar</button>
                      </div>
                    </form>)}
                    <span className='col-md-4 col-xs-0'></span>
                  </div>
                </td>
                <td className='col-md-4 col-xs-3 matches'>{this.props.partido.awayTeamName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );}
}

Partido.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, Partido);
