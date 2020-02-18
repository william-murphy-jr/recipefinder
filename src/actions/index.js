export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
export const NUMBER_OF_RESULTS = 'NUMBER_OF_RESULTS';

export default function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items: items
  }
}

export function favoriteRecipe(recipe) {
  return {
    type: FAVORITE_RECIPE,
    recipe,
  }
}

export function setNumberOfResults(number) {
  return {
    type: NUMBER_OF_RESULTS,
    numberOfResults: number
  }
}
