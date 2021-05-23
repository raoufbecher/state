import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import Profile from './Profile'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
class App extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          <div >
          <Navbar className="navbar"  sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">BECHER Raouf</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Resume</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Form inline className="right">
      <FormControl type="text" placeholder="GoMyCode" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
        <Profile />
          </div>
        
        </header>
      </div>
    )
  }
}
export default App 