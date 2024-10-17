import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">NETFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link style={{textDecoration:'none',color:'white'}} to = '/'>Home</Link></Nav.Link>
            <Nav.Link href=""><Link style={{textDecoration:'none',color:'white'}} to = '/movies'>Movie</Link></Nav.Link>
            <Nav.Link href="#action3"><Link style={{textDecoration:'none',color:'white'}} to = '/tv'>TV</Link></Nav.Link>
          </Nav>
          <ReactStars
    count={5}
    
    size={24}
    
    activeColor="#ffd700"
  />,
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{backgroundColor:'red',color:'white',border:'red'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr