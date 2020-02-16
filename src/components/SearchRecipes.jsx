import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import CONFIG from '../config/config';

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchText: '',
      health: '',
      calories: []

    }


    
    
    
  }
  
  search() {
    console.log('searchText: ', this.state.searchText);
    const { searchText, health} = this.state;
    const URL = `https://api.edamam.com/search?q=${searchText}&app_id=${CONFIG.__DEV.app_id}&app_key=${CONFIG.__DEV.api_key1}&from=0&to=3&health=${health}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': ''
      },
      mode: 'cors',
      cache: 'default'
    };
    fetch(URL)
    .then(response => response.json())
    .then(jsonData => {
      // *** do something here ***
      console.log(jsonData)
    })
    .catch(error => console.log('OOPS Error, it looks like you have an ' + error));
    
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <FormLabel className="FormLabel-input">Recipes</FormLabel>
          { " " }
          <FormControl type="text"
          placeholder="chicken"
          onChange={event => this.setState({ searchText: event.target.value })}/>
        </FormGroup>
        {" "}
        <FormGroup>
          <FormLabel>Health</FormLabel>
          { "  " }
          <FormControl type="text"
          placeholder="vegan or pork-free etc"
          onChange={(event) => this.setState({ health: event.target.value })}
          />
        </FormGroup>
        <Button onClick={ () => this.search() }>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes; 