import React, { Component } from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap';
import style from "./Navigation.module.css"

export default class Navigation extends Component {
    render() {
        return (
            <div>
                  <Navbar id={style.navigation}>
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="">Join </Nav.Link>
                
                <Nav.Link href="#pricing">Sign In </Nav.Link>
                </Nav>
                </Container>
          </Navbar>
            </div>
        )
    }
}
