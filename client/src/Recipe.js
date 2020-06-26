import React, { useState } from 'react';
import './styles/Recipe.scss';
import { Card, Button, ListGroup, ListGroupItem, Accordion, Col } from 'react-bootstrap';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Recipie = ({ title, calories, image, ingredients }) => {

  return (
    <Col lg={10} sm={6}>
      <Accordion defaultActiveKey="0">
        <Card className="recipe-card">
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Header>
            <h2>{title}</h2>
          </Card.Header>
          <div className="recipie-list-container">
            <Accordion.Toggle className="expand-button" as={Button} variant="link" eventKey="1">
              <span>View Recipe</span>
              <FontAwesomeIcon icon={faCaretDown} color="black" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ListGroup className="list-group-flush">
                  {ingredients.map(ingredient => (<ListGroupItem>{ingredient.text}</ListGroupItem>))}
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Card>
      </Accordion>
    </Col> 
  );
}

export default Recipie;
