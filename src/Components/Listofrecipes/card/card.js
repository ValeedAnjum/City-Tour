import React from 'react';
import './card.css';
const card = (props) => {
    return (
        <div className="col-md-3 card">
            
            <div className="con">
                 <img src={props.img} alt={props.title} />
                 <div className="mid">
                    <div className="RecipeHanding">{props.title}</div>
                    <div className="RecipeProvider">provided by {props.provider}</div>
                    <div className="btn btn-block btn-light" onClick={props.DetailRecipeModel} id={props.RecipeId} >Detail</div>
                    <a className="btn btn-block btn-light" 
                    rel="noopener noreferrer"
                    href={props.RecipeUrl} target="_blank">Recipe Url</a>
                 </div>
            </div>
        </div>
    );
}
export default card;