import React from 'react';
import { BrowserRouter, Route, Switch, Router, Redirect } from 'react-router-dom';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration.js'
import HomePage from './Layout/HomePage.js';
import useToken from './useToken';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import { createBrowserHistory } from "history";

const hist = createBrowserHistory();


function App() {

  const { token, setToken } = useToken();

  if (!token) {
    // return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">


      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">ScholarshipGo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/aboutUs">אודות</Nav.Link>
              <Nav.Link href="/contant">צור קשר</Nav.Link>
              <Nav.Link href="/link1">Link1</Nav.Link>
              <Nav.Link href="/link2">Link2</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/login"><a>Login</a></Nav.Link>
            <Nav.Link href="/sighIn"><a>Sigh In </a></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/sighIn">
            <Registration />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>





      {/* <Router history={hist}>
        <Switch>
          <Route path="/details" component={Details} />          
          <Route path="/showDetails/:id" component={ShowDetails} />
          <Route path="/showDetails" component={ShowDetails} />
          <Route path="/allUsers" component={AllUsers} />
          <Redirect from="/" to="/details" />
           
        </Switch>
      </Router> */}







    </div>
  );
}

export default App;