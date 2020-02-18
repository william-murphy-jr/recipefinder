import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipe } from '../actions';

class RecipeItem extends Component {
  constructor() {
    super();
    
    this.state = {
      favorite: false,
    }
  }

  favorite(recipeItem) {
    this.props.favoriteRecipe(recipeItem);
    this.setState({favorite: true});
  }
  
  render() {
    const { recipeItem } = this.props;
    return (
      <div className="recipe-item">
        <a className="recipe-item-anchor" href={ recipeItem.uri }>
          <h4 className="recipe-title">{ recipeItem.label } </h4>
          <p><em>by</em></p>
          <h5>{ recipeItem.source }</h5>
          <img className={ "Image-thumbnail" } src={ recipeItem.image } alt={recipeItem.label} />
        </a>
        <div className="Item-container">
          <div>
            {
              this.props.favoriteButton ? 
                this.state.favorite ?
                  <div className="recipe-filled-star">
                    <span>&#9733;</span>
                  </div>
                :
                  <div className="recipe-star" onClick={() => this.favorite(recipeItem)}>
                    <span>&#9734;</span>
                  </div>
              :
              <div>&nbsp;</div>
            }
          </div>
          <ul className="list-item-group">
            {
              recipeItem.ingredientLines.map((ingredient, index) => {
                return (
                  <li key={ index }>{ ingredient }</li>
                  )
                } )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(null, { favoriteRecipe })(RecipeItem);
