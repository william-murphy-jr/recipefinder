import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      movies: {},
    }

    const options = {
      method: 'GET',
      uri: `https://api.themoviedb.org/3/search/movie?api_key=${config.api_key1}&query=${text}`,
      headers: {
        'User-Agent': 'Mozilla'
      },
      json: true
    };
    


  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>
          { " " }
          <FormControl type="text" placeholder="garlic, chicken"/>
        </FormGroup>
        {"  "}
        <FormGroup>
          <FormLabel>Dish</FormLabel>
          { " " }
          <FormControl type="text" placeholder="adobo" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SearchRecipes; 