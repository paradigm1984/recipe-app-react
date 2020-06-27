import React from 'react';
import './styles/Recipe.scss';
import { Card, Button, ListGroup, ListGroupItem, Accordion, Col } from 'react-bootstrap';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Recipie = ({ title, calories, image, ingredients, cautions, filter }) => {
  // filters cautions list and doesnt show that div if there are no cautions
  const cautionsList = cautions.map(caution => (
    <li className="caution-list-item">{ caution }</li>
  ));
  console.log("filter: ", filter);

  return (
    <Col lg={5} sm={10}>
      <Accordion defaultActiveKey="0">
        <Card className="recipe-card">
          <div className="card-img-container container">
            <Card.Img variant="top" src={ image } alt={ title } />
          </div>
          <Card.Header>
            <h2>{ title }</h2>
          </Card.Header>
          <div className="basic-info-container">
            <p className="calories">calories: { calories }</p>
            <ListGroup style={{ display: (cautionsList.length > 0 ? 'inherit' : 'none') }}>
              <p className="cautions">Cautions:</p>
              <li style={{ display: (cautionsList.length > 0 ? 'inherit' : 'none') }} className="cautions-list">
                { cautionsList }
              </li>
            </ListGroup>
            <p className="filter">Filter: { filter }</p>
          </div>
          <div className="recipie-list-container">
            <Accordion.Toggle className="expand-button" as={ Button } variant="link" eventKey="1">
              <span>View Ingredients</span>
              <FontAwesomeIcon icon={ faCaretDown } color="black" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ListGroup className="list-group-flush">
                  { ingredients.map(ingredient => (<ListGroupItem>{ingredient.text}</ListGroupItem>)) }
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </div>
          <div className="">
            <Accordion.Toggle className="expand-button" as={ Button } variant="link" eventKey="1">
              <span>View Recipe</span>
              <FontAwesomeIcon icon={ faCaretDown } color="black" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ListGroup className="list-group-flush">
                  {
                    // ingredients.map(ingredient => (<ListGroupItem>{ingredient.text}</ListGroupItem>))
                  }
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
