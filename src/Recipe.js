import React from 'react';
import Style from './recipe.module.scss';

const Recipie = ({title, calories, image, ingredients}) => {


  return(
    <div>
      <h2>{title}</h2>
      <h3>Calories: {calories}</h3>
      <img src={image} alt={title}/>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
}


export default Recipie;
