import { SET_RECIPES, FAVORITE_RECIPE, NUMBER_OF_RESULTS } from '../actions';
import { combineReducers } from 'redux';

function recipes(state = [], action) {
  // console.log('state in recipes: ', state);
  switch(action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}

function favoriteRecipe(state = [], action) {
  // console.log('state in favoriteRecipe: ', state);
  switch(action.type) {
    case FAVORITE_RECIPE:
      const favorite = [...state, action.recipe];
      return favorite;
    default:
      return state;
  }
}

function numberOfResults(state = 0, action) {
  switch(action.type) {
    case NUMBER_OF_RESULTS:
      const number = action.numberOfResults;
      return number;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes, favoriteRecipe, numberOfResults });
export default rootReducer;
