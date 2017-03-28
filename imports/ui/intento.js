import React, {Component} from 'react';
import axios from 'axios';
import '../style/App.css';

class Intento extends Component {

    constructor(props) {
        super(props);
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
                                            <span className='col-md-4 col-xs-0'></span>
                                            <div className='col-md-4'>
                                                <span className='user-guess'>{this.props.intento.homeTeamScore}-{this.props.intento.awayTeamScore}</span>

                                            </div>
                                            <span className='col-md-4 col-xs-0'></span>
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
