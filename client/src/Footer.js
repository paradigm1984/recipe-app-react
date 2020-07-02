// Footer.js

import React from 'react';
import './styles/Footer.scss';
import { Row, Container, Col } from 'react-bootstrap';

const Footer = () => {

 return (
  <footer className="page-footer font-small">
  <Container>
    <Row className="footer-link-container">
     <Col xs={ 5 }>
       <h6 className="footer-link">
       <a href="https://github.com/paradigm1984/recipe-app-mern">Github</a>
       </h6>
     </Col>
     <Col xs={ 5 }>
       <h6 className="footer-link">
        <a href="https://danblanco.com">Portfolio</a>
       </h6>
     </Col>
    </Row>
    <hr className="rgba-white-light" />
  </Container>



  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a className="copyright-link" href="https://danblanco.com/"> danblanco.com</a>
  </div>
 
</footer>

 );
}

export default Footer;