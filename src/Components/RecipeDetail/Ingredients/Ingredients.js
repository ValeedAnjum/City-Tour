import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import './Ingredients.css';
const Ingredients = (props) => {
    
    return (
        <div className='row'>
            {
                props.ingredients.map((ing,index) => {
                    return (
                        <Ingredient key={index} title={ing}/>
                    );
                })
            }
        </div>
    );
}
export default Ingredients;