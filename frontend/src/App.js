import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from 'react-bootstrap';
import Home from './components/Home.jsx';

function App() {
  return (
    <Router>
        <Navbar bg="primary" expand="lg" variant='dark'>
          <Navbar.Brand href="#home">Sozluk</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#">Ana Sayfa</Nav.Link>
              <NavDropdown title="Hesap" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Giris Yap</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Kaydol</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Arama" className="mr-sm-2" />
              <Button variant="outline-light">Arama</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
