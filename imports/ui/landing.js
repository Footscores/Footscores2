import React, {Component} from 'react';
import '../style/App.css';

class Landing extends Component {
    render() {
        return (
          <div className='col-md-12'>
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
        );
    }
}
export default Landing;
