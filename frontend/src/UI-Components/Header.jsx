import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">SITE NAME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Button style={{ backgroundColor: 'white', color: 'black', borderRadius: '0' }}>Upload & Trade</Button>
                        <Nav.Link href="/login"><FaUser /> Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header