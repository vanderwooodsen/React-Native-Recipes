import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Text, View, StyleSheet, Link} from 'react-native';
import {Card, Avatar, Button, Title, Paragraph, IconButton, Colors,  ToggleButton, Searchbar, Appbar, DataTable} from 'react-native-paper';
import { connect } from 'react-redux';
import {searchRecipes} from '../reduxStore'
import { ScrollView } from 'react-native-gesture-handler';

const RecipeCard = ({recipe, onPress}) => {
    let [liked, setLiked] = useState(false);

    return <Card onPress={onPress} style={styles.container}>
          <Card.Title title={recipe.title} subtitle={recipe.category}/>
          <Card.Cover style={styles.img} source={{ uri: recipe.imgUrl }} />
          <Card.Actions >
          <IconButton icon="heart" size={34}
            color={liked ? Colors.red600 : Colors.grey300}
            onPress={() => setLiked(!liked)}>Add to Favorite
          </IconButton>
          </Card.Actions>
        </Card>
}

class HomeScreen extends React.Component{
  componentDidMount() {
    this.props.searchRecipes("Cheese");
  }

  render() {
    let recipes = this.props.recipes;
    let search = this.props.search;
    let navigation = this.props.navigation;

    return (
      <ScrollView contentContainetStyle={styles.container}>
          <Searchbar
            placeholder="Search"
            value={search}
            onChangeText={(text) => this.props.searchRecipes(text)}
          />

          {recipes.length == 0 && <Text>No Recipes :(</Text>}

          {recipes.map(recipe =>
            <RecipeCard recipe={recipe}
              key={recipe.id}
              onPress={() => navigation.navigate('SingleRecipe', {
                recipe: recipe
              })}/>)}
      </ScrollView>);
   }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    marginTop: 5,
    marginBottom:5,
    borderColor: '#f5f5f5',
    justifyContent: 'center',
  },
  img:{
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'center'
  }

});



const mapState = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatch = (dispatch) => {
  return {
    searchRecipes: (search) => dispatch(searchRecipes(search))
  }
}

export default connect(mapState, mapDispatch)(HomeScreen);

