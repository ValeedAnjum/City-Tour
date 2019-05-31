import React from 'react';
import './Ingredient.css';
const Ingredient = (props) => {
    return (
        <div className="Ingredient">
            {props.title}
        </div>
    );
}
export default Ingredient;