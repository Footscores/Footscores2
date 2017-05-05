/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, react/prop-types, react/forbid-prop-types, arrow-body-style,
react/require-default-props, react/prefer-stateless-function, react/no-unused-prop-types,
jsx-a11y/no-static-element-interactions, react/jsx-first-prop-new-line
*/
import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap/lib/';
import { LinkContainer } from 'react-router-bootstrap';
import AccountsWrapper from './accountsWrapper.jsx';
import '../style/App.css';

class Navegacion extends Component {
  render() {
    const isLoggedin = (this.props.user !== null);
    return (
      <div>
        <Navbar className="navbar-inverse">
          <Navbar.Header>
            <Navbar.Brand>
              FootScores
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {isLoggedin ?
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
    :
              <Nav>
                <LinkContainer to="/">
                  <AccountsWrapper />
                </LinkContainer>
              </Nav>}
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
