import axios from 'axios';
import React, {Component} from 'react';
import '../style/App.css';
import Partido from './partido.js';

export default class Leagues extends Component {

  constructor(props) {
    super(props)
    this.state = {
      liga:[],
      lleno: true,
      cargando: false
    }
  }

  getFixturesLeague(leagueCode) {
    this.setState({
      cargando:true
    });
    Meteor.call('api.nextWeekCompetition', {id: leagueCode}, (err, fixtures) => {
      if(fixtures.length>0) {
        this.setState({
          lleno: true,
          liga: fixtures,
          cargando:false
        });
      }
      else {
        this.setState({
          liga:[],
          lleno:false,
          cargando:false
        });
      }
    });
  }


  render() {
    const estaLleno = this.state.lleno;
    const cargo = this.state.cargando;
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Partidos de la semana</h1>
          </div>
        </div>
        <hr className="content-divider"></hr>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Seleccione la competencia</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-2'>
                <img role='button' tabIndex='0' aria-label='Boton para acceder a la champions lig' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('CL')} onClick={() => this.getFixturesLeague('CL')} alt='logo de la Champions League' className="img-league img-circle img-responsive"
                  src="img/leagues/uefa.jpg"></img>
                </div>
                <div className='col-md-2'>
                  <img role='button' tabIndex='0' aria-label='Boton para acceder a la copa del rey' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('CDR')} onClick={() => this.getFixturesLeague('CDR')} alt='logo de la copa del rey' className="img-league img-circle img-responsive"
                    src="img/leagues/copadelrey.jpg"></img>
                  </div>
                  <div className='col-md-2'>
                    <img role='button' tabIndex='0' aria-label='Boton para acceder a la bundesliga' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('BL1')} onClick={() => this.getFixturesLeague('BL1')} alt='logo de la bundesliga' className="img-league img-circle img-responsive"
                      src="img/leagues/bundesliga.jpg"></img>
                    </div>
                    <div className='col-md-2'>
                      <img role='button' tabIndex='0' aria-label='Boton para acceder a la liga eredivisie' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('DED')} onClick={() => this.getFixturesLeague('DED')} alt='logo de la liga eredivisie' className="img-league img-circle img-responsive"
                        src="img/leagues/erdivisie.jpg"></img>
                      </div>
                      <div className='col-md-2'>
                        <img role='button' tabIndex='0' aria-label='Boton para acceder a la Facup' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('FAC')} onClick={() => this.getFixturesLeague('FAC')} alt='logo de la FaCup' className="img-league img-circle img-responsive"
                          src="img/leagues/FaCup.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img role='button' tabIndex='0' aria-label='Boton para acceder a la liga santander' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('PD')} onClick={() => this.getFixturesLeague('PD')} alt='logo de la liga Santander' className="img-league img-circle img-responsive"
                            src="img/leagues/ligaSantander.jpg"></img>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-2'>
                            <img role='button' tabIndex='0' aria-label='Boton para acceder a la ligue 1' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('FL1')} onClick={() => this.getFixturesLeague('FL1')} alt='logo de la Ligue 1' className="img-league img-circle img-responsive"
                              src="img/leagues/ligue1.jpg"></img>
                            </div>
                            <div className='col-md-2'>
                              <img role='button' tabIndex='0' aria-label='Boton para acceder a la liga pokal' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('DFB')} onClick={() => this.getFixturesLeague('DFB')} alt='logo de la pokal liga' className="img-league img-circle img-responsive"
                                src="img/leagues/pokal.jpg"></img>
                              </div>
                              <div className='col-md-2'>
                                <img role='button' tabIndex='0' aria-label='Boton para acceder a la premier lig' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('PL')} onClick={() => this.getFixturesLeague('PL')} alt='logo de la premier league' className="img-league img-circle img-responsive"
                                  src="img/leagues/premier.jpg"></img>
                                </div>
                                <div className='col-md-2'>
                                  <img role='button' tabIndex='0' aria-label='Boton para acceder a la primeira liga' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('PPL')} onClick={() => this.getFixturesLeague('PPL')} alt='logo de la primeira liga' className="img-league img-circle img-responsive"
                                    src="img/leagues/primeiraLiga.jpg"></img>
                                  </div>
                                  <div className='col-md-2'>
                                    <img role='button' tabIndex='0' aria-label='Boton para acceder a la serie a italiana' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('SA')} onClick={() => this.getFixturesLeague('SA')} alt='logo de la serie A italiana' className="img-league img-circle img-responsive"
                                      src="img/leagues/serieA.jpg"></img>
                                    </div>
                                    <div className='col-md-2'>
                                      <img role='button' tabIndex='0' aria-label='Boton para acceder a la copa uefa' onKeyPress={(event) => (event.charCode == '13') && this.getFixturesLeague('EL')} onClick={() => this.getFixturesLeague('EL')} alt='logo de la uefa cup' className="img-league img-circle img-responsive"
                                        src="img/leagues/uefacup.jpg"></img>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr className="content-divider"></hr>
                                <div className='row'>
                                  {cargo ?
                                    (<div className="col-md-12">
                                      <div className='loader'></div>
                                    </div>):(
                                      <div></div>
                                    )}</div>
                                    <div className='row'>
                                      {estaLleno ? (this.state.liga.map(partido =>{
                                        return <Partido key={partido.id} partido={partido} />
                                      }) )
                                      : (<h3>No hay partidos disponibles para esta liga, selecciona otra!</h3>)}
                                    </div>
                                  </div>
                                );
                              }
                            }
