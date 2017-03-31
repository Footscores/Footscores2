import React, {Component} from 'react';
import axios from 'axios';
import '../style/App.css';

class Intento extends Component {

    constructor(props) {
        super(props);
    }

    renderResult()
    {
      if(this.props.correct !== undefined)
      {
          if(this.props.correct === true)
          {
            return(<i className="fa fa-check-circle-o fa-lg" aria-hidden="true"></i>);
          }
          else
          {
            return(<i className="fa fa-times-circle fa-lg" aria-hidden="true"></i>);
          }
      }
      else
      {
        return(<i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>);
      }
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>

                    <div className='row'>
                        <table className='table-matches'>
                            <tbody>
                                <tr>
                                    <td className='col-md-4 col-xs-3 matches'>{this.props.intento.homeTeam}</td>
                                    <td className='col-md-4 col-xs-6 matches'>
                                        <div className='row'>
                                          <div className='col-md-3 col-xs-0'></div>
                                            <div className='col-md-6'>
                                                <div className='row result-guess'>
                                                  <span >{this.props.intento.homeTeamScore}-{this.props.intento.awayTeamScore}</span>
                                                </div>
                                                <div className='row'>
                                                  {this.renderResult()}
                                                </div>
                                            </div>
                                            <div className='col-md-3 col-xs-0'></div>
                                        </div>
                                    </td>
                                    <td className='col-md-4 col-xs-3 matches'>{this.props.intento.awayTeam}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
export default Intento;
