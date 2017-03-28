import React, {Component} from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
import {LinkContainer} from 'react-router-bootstrap';
import AccountsWrapper from './accountsWrapper.jsx';
import '../style/App.css';

class Navegacion extends Component {
    render() {
        var navbar;
        var isLoggedIn = Meteor.user();
        if (logueado !==null){
            navbar = (
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
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                );
        }
        else{
            bar = (
                <Navbar className="navbar-inverse">
                    <Navbar.Header>
                        <Navbar.Brand>
                            FootScores
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                          <LinkContainer to="/">
                            <AccountsWrapper />
                          </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            );
        }
        return (
            <div>
            {navbar}
            </div>
        );
    }
}
/*Margarita: Deberían hacer que la Navbar no muestre los NavItems si el usuario no ha iniciado sesión usando createContainer
    Creo que debería funcionar con los cambios que hice :) */
export default createContainer(() =>{
	return{
		currentUser: Meteor.user()
	};
}, Navegacion);
