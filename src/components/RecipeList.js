import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import Navigation from './Navigation';

class recipeList extends Component {
  render() {
    console.log('this.props: ',this.props);
    return (
      <div>
        { 
          this.props.favoriteRecipe.length > 0 ? 
            <Navigation componentClassNames={ "navigation-component" } to={ "/favorites" } name={ "Favorites" }/>
          :
            <div></div>
        }
        {
          this.props.recipes.map((recipe, index) => {
            const recipeItem = recipe.recipe
            return (
              <RecipeItem
                key={ index }
                recipeItem={ recipeItem }
                favoriteButton={true}
                />
            )
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps, null)(recipeList);