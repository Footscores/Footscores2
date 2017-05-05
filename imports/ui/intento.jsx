/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props, no-else-return
*/
import React, { Component } from 'react';

class Intento extends Component {

  renderResult() {
    if (this.props.intento.correct !== undefined) {
      if (this.props.intento.correct === true) {
        return (<i className="fa fa-check-circle-o fa-lg" aria-hidden="true" />);
      } else {
        return (<i className="fa fa-times-circle fa-lg" aria-hidden="true" />);
      }
    } else {
      return (<i className="fa fa-clock-o fa-lg" aria-hidden="true" />);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">

          <div className="row">
            <table className="table-matches">
              <tbody>
                <tr>
                  <td className="col-md-4 col-xs-3 matches">{this.props.intento.homeTeam}</td>
                  <td className="col-md-4 col-xs-6 matches">
                    <div className="row">
                      <div className="col-md-3 col-xs-0" />
                      <div className="col-md-6">
                        <div className="row result-guess">
                          <span >
                            {this.props.intento.homeTeamScore}-{this.props.intento.awayTeamScore}
                          </span>
                        </div>
                        <div className="row">
                          {this.renderResult()}
                        </div>
                      </div>
                      <div className="col-md-3 col-xs-0" />
                    </div>
                  </td>
                  <td className="col-md-4 col-xs-3 matches">{this.props.intento.awayTeam}</td>
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
