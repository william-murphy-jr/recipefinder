import React, { Component } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import CONFIG from '../config/config';
import { connect } from 'react-redux';
import setRecipes from '../actions';

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchText: '',
      healthLabels: '',
      calories: [],
      number: 0,
    }
  }
  
  search() {
    console.log('searchText: ', this.state.searchText);
    const { searchText, healthLabels, number } = this.state;
    const URL = `https://api.edamam.com/search?q=${searchText}&app_id=${CONFIG.__DEV.app_id}&app_key=${CONFIG.__DEV.api_key1}&from=0&to=${number}&Label=${healthLabels}`;
    
    fetch(URL)
      .then(response => response.json())
      .then(jsonData => {
        // *** do something here ***
        const hits = jsonData.hits;
        console.log(jsonData.hits) // hits are the recipes return limited in above GET request
        this.props.setRecipes(hits);
      })
      .catch(error => console.log('OOPS Error, it looks like you have an ' + error));
    
  } // search

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
          <FormLabel>Health Label</FormLabel>
          { "  " }
          <FormControl type="text"
          placeholder="fat-free or low-sugar, etc"
          onChange={(event) => this.setState({ health: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Number of Results to Return</FormLabel>
          <FormControl className="results-input-number"
          type="number"
          min="1"
          value={this.state.number}
          onChange={(event) => this.setState({ number: event.target.value })} />
        </FormGroup>
        <Button onClick={ () => this.search() }>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes); 
