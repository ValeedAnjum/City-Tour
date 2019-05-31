import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Search from './Components/Search/Search';
import ListOfRecipes from './Components/Listofrecipes/listofrecipes';
import Recipedetail from './Components/RecipeDetail/Recipedetail';
import axios from 'axios';
import {listofrecipes} from './initState';
import {Recipedetails} from './initRstate';
class App extends Component {
    state = {
        RecipeVal: "",
        Recipes:null,
        Recipedetail:false,
        AllRecipeDetails:Recipedetails.recipe
    }
    RecipeValHandler = (e) => {
        const NewVal = e.target.value;
        this.setState({RecipeVal: NewVal});
    }
    DetailRecipeModel = (e) => {
      if(e.target.id === 'null'){
          this.setState({Recipedetail:false});
          return;
      }
      let RecipeDetailUrl = `https://www.food2fork.com/api/get?key=5d060541c797816306230945272cb527&rId=${e.target.id}`;
      axios.get(RecipeDetailUrl).then(res => {
          this.setState({
              AllRecipeDetails:res.data.recipe,
              Recipedetail:!this.state.Recipedetail
          });
      })
    }
    componentDidMount(){
        axios.get('https://www.food2fork.com/api/search?key=5d060541c797816306230945272cb527&q=chicken%20breast&page=10').then(res => {
            this.setState({Recipes:res.data.recipes});
        } )
    }
    SearchRecipeResult = () => {
        let url = `https://www.food2fork.com/api/search?key=5d060541c797816306230945272cb527&q=${this.state.RecipeVal}&page=5`;
        axios.get(url).then(res => {
            this.setState({Recipes:res.data.recipes});
        } );
    }
    render() {
        
        return (
            <React.Fragment>
                <Recipedetail 
                Recipedetail={this.state.Recipedetail} 
                AllRecipeDetails={this.state.AllRecipeDetails}
                DetailRecipeModel={this.DetailRecipeModel} >
                  <Search
                      SearchRecipeResult={this.SearchRecipeResult}
                      RecipeValHandler={this.RecipeValHandler}
                      SearchRecipe={this.state.RecipeVal}/>
                  <ListOfRecipes ListOfRecipes={this.state.Recipes} DetailRecipeModel={this.DetailRecipeModel}/>
                </Recipedetail>
            </React.Fragment>
        );
    }
}

export default App;
