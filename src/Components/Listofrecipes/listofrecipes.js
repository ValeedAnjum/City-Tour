import React from 'react';
import './listofrecipes.css';
import Card from './card/card';
const Listofrecipes = (props) => {
    let ListOfRecipes = null;
    if(props.ListOfRecipes == null){
        ListOfRecipes = null;
    }else{
        ListOfRecipes = props.ListOfRecipes.map((Recipe,index) => {
            return (
                <Card key={index} 
                img={Recipe.image_url} 
                title={Recipe.title} 
                RecipeUrl={Recipe.source_url}
                RecipeId={Recipe.recipe_id}
                DetailRecipeModel={props.DetailRecipeModel}
                provider={Recipe.publisher}/>
            );
        })
    }
    return (
        <div className="container-fluid p-5">
            <div className="row">
            {
                ListOfRecipes
            }
            </div>
        </div>
    );
}
export default Listofrecipes;