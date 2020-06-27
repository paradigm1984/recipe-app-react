import React,{useEffect, useState} from 'react';
import Recipie from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import { InputGroup, Form, Button, Row } from 'react-bootstrap';

const App = ()=> {

  const APP_ID = "4ca90bc3";
  const APP_KEY = "efcca35385635d8635bd078f5b89099f";
  const [recipies, setRecipies] = useState([]);  
  const [searchString, setSearchString] = useState("");
  const [queryString, setQueryString] = useState("");
  const [filter, setFilter] = useState("");
  const [appDimensions, setAppDimensions] = React.useState({width: window.innerWidth, height: window.innerHeight});

  // by adding an empty array to the useEffect function as a param, itll only run when the app has mounted. you could add the state in which you want this function to run within the array.
  // useEffect(()=> {
  //   getRecipies();
  // }, [queryString]);

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
        <Form onSubmit={submitSearch}>
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
          <div className="filter-select-list">
            <h3 className="app-header-2" >Filters</h3>
            <Form.Control
              as="select"
              id="inlineFormCustomSelect"
              className="custom-select"
              onChange={updateFilter}
            >
              <option value="0">Choose...</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="peanut-free">Peanut-Free</option>
              <option value="tree-nut-free">Tree-Nut-Free</option>
              <option value="peanut-free">Peanut-Free</option>
            </Form.Control>
          </div>
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
