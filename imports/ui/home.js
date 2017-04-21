import React, {Component} from 'react';
import '../style/App.css';

class Home extends Component {

    /*  constructor(props)
  {
    super(props)
  }*/

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>Bienvenido a FootScores</h1>
                    </div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                        <div className='row'>
                          <div className='col-md-6'>
                            <div className="box">
                                <h3>¿Como usar FootScores?</h3>
                                <hr className="content-divider"></hr>
                                <ul>
                                    <li>Ve a la sección de Ligas</li>
                                    <li>Selecciona una liga para ver los partidos disponibles</li>
                                    <li>Adivina cuanto van a quedar!</li>
                                    <li>Una vez pasen los partidos, ve a tu perfil para recalcular tu puntaje</li>
                                    <li>Gana 10 puntos por cada marcador que aciertes, y mira como avanzas en el Leaderboard!</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-6'>
                          <img alt='estadio' className="img-home img-circle img-responsive pull-right"
                            src="img/estadio.jpg"></img>
                        </div>
                    </div>
                    <hr className="content-divider"></hr>
                    <div className='row'>
                      <div className='col-md-6'>
                        <img alt='balon' className="img-home img-circle img-responsive  pull-left"
                          src="img/balon.jpg"></img>
                      </div>
                        <div className='col-md-6'>
                            <div className="box">
                                <h3>¿Como funciona FootScores?</h3>
                                <hr className="content-divider"></hr>
                                <p>En FootScores trabajamos para brindarte la mejor experiencia posible, nuestro servidor se conecta constantemente con un API y obtiene los próximos partidos de las mejores competencias! Cada hora se analizan los valores ingresados por el usuario, se calculan los puntos y se actualiza el Leaderboard.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="content-divider"></hr>
            </div>
        );
    }
}
export default Home;
