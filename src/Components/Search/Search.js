import React from 'react';
import './Search.css';
const Search = (props) => {
    return (
        <div className="container SearchC">
            <h1 className="SearchHeading">Search For recipe with food2Fork</h1>
            <h4>Search recipe</h4>
            <div className="input-group mb-3">
                <input type="text" className="form-control"
                onChange={props.RecipeValHandler}
                placeholder="Search Recipe" value={props.SearchRecipe} />
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="submit" onClick={props.SearchRecipeResult}>Search</button>
                    </div>
            </div>
        </div>
            );
}

export default Search;