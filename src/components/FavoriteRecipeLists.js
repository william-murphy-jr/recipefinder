import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class FavoriteRecipeLists extends Component {
  render() {
    console.log('this.props', this.props);
    const { favoriteRecipe } = this.props;

    return (
      <div>
        <h3 className="favorite-recipe-title">My Favorite Recipes</h3>
        {
          favoriteRecipe.map((recipe, index) => {
            return (
              <RecipeItem key={ index }
              recipeItem={ recipe} 
              recipeButton={ false }
              />
            ) 
          })
        }
        *** Map the List items here ***
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteRecipe: state.favoriteRecipe
  };
}

export default connect(mapStateToProps, null)(FavoriteRecipeLists);