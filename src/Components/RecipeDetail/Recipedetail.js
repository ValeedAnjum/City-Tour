import React from 'react';
import Ingredients from './Ingredients/Ingredients';
import './Recipedeatil.css';
const Recipedetail = (props) => {
    return (
        <div className="RecipedetailC">
            <div className="child" style={props.Recipedetail ? {display:'none'}:{display:'block'}}>
              {props.children}
            </div>
            <div className="Recipedetail" style={props.Recipedetail ? {display:'block'}:{display:'none'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <button className="btn btn-success backbtn" onClick={props.DetailRecipeModel} id="null">Back To Recipe List</button>
                        <img src={props.AllRecipeDetails.image_url} alt={props.title}/>
                        </div>
                        <div className="col-md-6">
                            <h5>{props.AllRecipeDetails.title}</h5>
                            <h6>provided by {props.AllRecipeDetails.publisher}</h6>
                            <a className="btn btn-danger"
                            rel="noopener noreferrer"
                            href={props.AllRecipeDetails.publisher_url} target="_blank">Publisher webpage</a>
                            <a className="btn btn-info" 
                            rel="noopener noreferrer"
                            href={props.AllRecipeDetails.source_url} target="_blank">Recipe Url</a>
                            <h1>Ingredients</h1>
                            <Ingredients ingredients={props.AllRecipeDetails.ingredients}/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default Recipedetail;