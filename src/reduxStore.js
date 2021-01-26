import axios from 'axios';

function makeRecipes(data) {
  if(!data.meals) {
    return [];
  }

  let recipes = [];

  for (let meal of data.meals) {
    let ingredients = [];

    let i = 1;
    while (meal["strIngredient" + i]) {
      ingredients.push({
        title: meal["strIngredient" + i],
        amount: meal["strMeasure" + i]
      })

      i++;
    }

    let recipe = {
      id: meal.idMeal,
      title: meal.strMeal,
      instructions: meal.strInstructions,
      category: meal.strCategory,
      imgUrl: meal.strMealThumb,
      ingredients: ingredients
    }

    recipes.push(recipe)
  }

  return recipes;
}

const SET_RECIPES = 'SET_RECIPES';

const setRecipes = (recipes) =>{
  return {
    type: SET_RECIPES,
    recipes
  }
}

const SET_SEARCH = 'SET_SEARCH';

const setSearch = (search) =>{
  return {
    type: SET_SEARCH,
    search
  }
}

export const searchRecipes = (search) =>{
  return async(dispatch)=>{
    try {
      dispatch(setSearch(search));

      let response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search);
      let recipes = makeRecipes(response.data);
      dispatch(setRecipes(recipes));
    } catch (err) {
      console.log(err);
    }
  }
}

const initialState = {
  search: "",
  recipes: [{
    id: 5,
    title: "Rice with Meat",
    imgUrl: "https://www.themealdb.com/images/media/meals/kw92t41604181871.jpg",
    ingredients: [
      {title: "Rice", amount: "100g"},
      {title: "Meat", amount: "430g"},
      {title: "Sauce", amount: "200g"}
    ],
    instructions: "Cook"
  }],
}

export default function(state = initialState, action) {
  switch (action.type){
    case SET_RECIPES:
      return{
        ...state,
        recipes: action.recipes
      }
    break
    case SET_SEARCH:
      return{
        ...state,
        search: action.search
      }
    break
  }
  return state;
}
