import React, {useEffect, useState} from 'react';
import Recipie from './Recipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import { InputGroup, Form, Button, Row, Modal } from 'react-bootstrap';
import Footer from './Footer';

const App = () => {
  let firstQuery = true;
  const APP_ID = "4ca90bc3";
  const APP_KEY = "efcca35385635d8635bd078f5b89099f";
  const [recipies, setRecipies] = useState([]);  
  const [searchString, setSearchString] = useState("");
  const [queryString, setQueryString] = useState("");
  const [appDimensions, setAppDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 330
  });
 
  const [modalText, setModalText] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 



  // by adding an empty array to the useEffect function as a param, itll only run when the app has mounted. you could add the state in which you want this function to run within the array.
  useEffect(()=> {
    getRecipies();
  }, [queryString]);


  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  const updateWidthAndHeight = () => {
    setAppDimensions({
      minWidth: window.innerWidth,
      minHeight: window.innerHeight - 330
    })
  };

  // async functions are a way to use promises. similar to .then().
  const getRecipies = async () => {
    // gives you an await option that will make JS wait until the data is recieved and then assigns it to a var. especially useful when getting a response from an API.
    let response;
    let data;
    try {
      // console.log("response no filter: ", response);
      response = await fetch(`https://api.edamam.com/search?q=${queryString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      data = await response.json();
      console.log("first query: ", firstQuery);
      if (data.hits.length == 0 && firstQuery === false) {
        console.log("TRIGGER MODAL FOR INCORRECT QUERY HERE");
        setModalText("This has been caused by a misspelled search. Please try again.");
        handleShow();
      }
      console.log("data: ", data.hits);
      setRecipies(data.hits);
    } catch (err) {
      if (err == 'TypeError: Failed to fetch') {
        console.log("error is: ", err);
        setModalText("This has been caused by maxing out the free queries to the edamam.com API. Please wait a few minutes and try again.")
        handleShow();
      }
    }
   
  }

  const updateSearch = e => {
    setSearchString(e.target.value);
  }

  const submitSearch = e => {
    e.preventDefault();
    if (firstQuery === true) {
      firstQuery = false;
    }
    setQueryString(searchString);
    getRecipies(queryString);
    setSearchString("");
    updateWidthAndHeight();
  }

  return (
    <div className="app">
      <section className="submit-section" style={appDimensions}>
        <h2 className="app-header-1" >Ingredient Search</h2>
        <Form id="recipeSubmit" onSubmit={submitSearch}>
          <InputGroup className="mb-3 recipe-input">
            <Form.Control
              placeholder="Search"
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
        </Form>
      </section>
      <section className="response-section">
        <Row className="recipie-row">
          { recipies.map(recipe => (
            <Recipie
              key={ recipe.recipe.uri }
              title={ recipe.recipe.label }
              calories={ recipe.recipe.calories.toFixed(0) }
              image={ recipe.recipe.image }
              ingredients={ recipe.recipe.ingredients }
              cautions={ recipe.recipe.cautions }
            />
          ))}
        </Row>
      </section>
      <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>Looks like theres been an error :(</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ modalText } </Modal.Body>
        <Modal.Footer>
          <Button className="modal-close" variant="secondary" onClick={ handleClose }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
};

export default App;
