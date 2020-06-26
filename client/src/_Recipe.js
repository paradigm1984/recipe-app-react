import React,{useEffect, useState} from 'react';
import './Recipe.module.scss';
import {Card, Button, ListGroup, ListGroupItem, Collapse} from 'react-bootstrap';



const Recipie = ({title, calories, image, ingredients}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <Card className="recipe-card">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>Calories: { calories }</span>
        </Card.Text>
        <div className="button-container">
          <Button className="recipe-button" onClick={toggle} style={{ marginBottom: '1rem' }}>View Recipe</Button>
        </div>
      </Card.Body>
      <Collapse isOpen={isOpen}>
        <ListGroup className="list-group-flush">
          {ingredients.map(ingredient => (
            <ListGroupItem>{ingredient.text}</ListGroupItem>
          ))}
        </ListGroup>
      </Collapse>
      
    </Card>
  );
}

export default Recipie;
