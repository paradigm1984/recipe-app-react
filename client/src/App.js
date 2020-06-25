import React,{useEffect, useState} from 'react';
import Recipie from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

const App = ()=> {

  const APP_ID = "4ca90bc3";
  const APP_KEY = "efcca35385635d8635bd078f5b89099f";

  const [recipies, setRecipies] = useState([]);  
  const [searchString, setSearchString] = useState("");
  const [queryString, setQueryString] = useState("");
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
    const response = await fetch(`https://api.edamam.com/search?q=${queryString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    // console.log("data: ", data.hits);
    setRecipies(data.hits);
    console.log(data.hits);
  }

  // seems to be an ES6 way of writing a function for events
  const updateSearch = e => {
    setSearchString(e.target.value)
    // console.log("search string:", searchString)
  }

  const submitSearch = e => {
    e.preventDefault();
    setQueryString(searchString);
    setSearchString("");
  }

  return (
    <div className="app" style={appDimensions}>
      <section className="submit-section">
        <h2 className="app-header" >Recipe Search</h2>
        <form  onSubmit={submitSearch}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search a recipe"
            aria-label="Recipe"
            aria-describedby="basic-addon2"
            className="search-bar"
            type="text"
            value={searchString}
            onChange={updateSearch}
          />
      <InputGroup.Append>
        <Button variant="outline-secondary" className="search-button">Submit</Button>
      </InputGroup.Append>
    </InputGroup>
        </form>
   
      </section>
      <section className="response-section">
        {/* mapping the array of objects which is being pulled in by the API.
        uses the Recipie component to lay it all out in HTML (JSX) */}
          {recipies.map(recipe =>(
            <Recipie
              key={recipe.recipe.uri}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
      </section>
    </div>
  );
};

export default App;
