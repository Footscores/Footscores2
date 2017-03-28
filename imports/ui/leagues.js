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
                          <img onClick={() => this.getFixturesLeague('CL')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/uefa.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('CDR')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/copadelrey.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('BL1')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/bundesliga.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('DED')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/erdivisie.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('FAC')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/FaCup.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('PD')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/ligaSantander.jpg"></img>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('FL1')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/ligue1.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('DFB')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/pokal.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('PL')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/premier.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('PPL')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/primeiraLiga.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('SA')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/serieA.jpg"></img>
                        </div>
                        <div className='col-md-2'>
                          <img onClick={() => this.getFixturesLeague('EL')} alt='logo de la liga' className="img-league img-circle img-responsive"
                            src="img/leagues/uefacup.jpg"></img>
                        </div>
                      </div>
                    </div>
                </div>
                <hr className="content-divider"></hr>
                <div className='row'>
                  {cargo ?
                    (<div className="loader col-md-12"></div>):(
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
