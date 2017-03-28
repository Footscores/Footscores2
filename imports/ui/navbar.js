import React, {Component} from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
import {LinkContainer} from 'react-router-bootstrap';
import AccountsWrapper from './accountsWrapper.jsx';
import '../style/App.css';

//Los botones de la navbar no deberían poder clickearse si no se está loggeado, pues cambia de página (ruta)
//pero no pasa nada, algo inesperado.
class Navegacion extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar-inverse">
                    <Navbar.Header>
                        <Navbar.Brand>
                            FootScores
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                          <LinkContainer to="/home">
                            <NavItem eventKey={1}>Instrucciones</NavItem>
                          </LinkContainer>
                          <LinkContainer to="/leagues">
                            <NavItem eventKey={2}>Ligas</NavItem>
                          </LinkContainer>
                          <LinkContainer to="/leaderboard">
                            <NavItem eventKey={3}>Leaderboard</NavItem>
                          </LinkContainer>
                          <LinkContainer to="/profile">
                              <NavItem eventKey={4}>Perfil</NavItem>
                          </LinkContainer>
                          <LinkContainer to="/">
                            <AccountsWrapper />
                          </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                          {/* Ir al perfil si está conectado */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Navegacion;
