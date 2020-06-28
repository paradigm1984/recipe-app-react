import React,{useEffect, useState} from 'react';
import Recipie from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import { InputGroup, Form, Button, Row, Accordion, Table } from 'react-bootstrap';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


// TODO: add filters.js to this file and have access to that array of objects so that you
// can create a dropdown under the search with more detailed search fields. you might have to
// export them from the filters.js file

// also TODO: finish styling the data in the cards and see what else you want to bring in 
// from the API data


const App = ()=> {

  const APP_ID = "4ca90bc3";
  const APP_KEY = "efcca35385635d8635bd078f5b89099f";
  const [recipies, setRecipies] = useState([]);  
  const [searchString, setSearchString] = useState("");
  const [queryString, setQueryString] = useState("");
  const [filter, setFilter] = useState("");
  const [appDimensions, setAppDimensions] = React.useState({width: window.innerWidth, height: window.innerHeight});

  // by adding an empty array to the useEffect function as a param, itll only run when the app has mounted. you could add the state in which you want this function to run within the array.
  useEffect(()=> {
    getRecipies();
  }, [queryString]);

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setAppDimensions({minWidth: window.innerWidth, minHeight: window.innerHeight})
  };

  // async functions are a way to use promises. similar to .then().
  const getRecipies = async () => {
    // gives you an await option that will make JS wait until the data is recieved and then assigns it to a var. especially useful when getting a response from an API.
    let response;
    let data;

    switch (filter) {
      case "":
        response = await fetch(`https://api.edamam.com/search?q=${queryString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        console.log("response no filter: ", response);
        data = await response.json();
        break;
      default:
        response = await fetch(`https://api.edamam.com/search?q=${queryString}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${filter}`);
        console.log("response with filter: ", response);
        data = await response.json();
      }

    console.log("data: ", data.hits);
    setRecipies(data.hits);
  }

  // seems to be an ES6 way of writing a function for events
  const updateSearch = e => {
    setSearchString(e.target.value);
  }

  const updateFilter = e => {
    setFilter(e.target.value);
  }

  const submitSearch = e => {
    e.preventDefault();
    console.log(`submitting search with ${queryString} as the query string`);
    setQueryString(searchString);
    getRecipies(queryString);
    setSearchString("");
    updateWidthAndHeight();
  }

  return (
    <div className="app" style={appDimensions}>
      <section className="submit-section">
        <h2 className="app-header-1" >Recipe Search</h2>
        <Form id="recipeSubmit" onSubmit={submitSearch}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search a recipe"
              aria-label="Recipe"
              aria-describedby="basic-addon2"
              className="search-bar"
              type="text"
              value={searchString}
              onChange={updateSearch}
            />
            <InputGroup.Append>    
              <Button variant="outline-secondary" type="submit" className="search-button">Submit</Button>
            </InputGroup.Append>
          </InputGroup>
          <Accordion className="hidden-filters-container" defaultActiveKey="0">
            <Accordion.Toggle className="filter-button" as={Button} variant="link" eventKey="1">
              <span>View Filters</span>
              <FontAwesomeIcon icon={faCaretDown} color="#495057" />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Collapse>
          </Accordion>
        </Form>
      </section>
      <section className="response-section">
        <Row className="recipie-row">
          {/* mapping the array of objects which is being pulled in by the API.
        uses the Recipie component to lay it all out in HTML (JSX) */}
          {recipies.map(recipe => (
            <Recipie
              key={recipe.recipe.uri}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories.toFixed(0)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              cautions={recipe.recipe.cautions}
              filter={filter}
            />
          ))}
        </Row>
      </section>
    </div>
  );
};

export default App;
