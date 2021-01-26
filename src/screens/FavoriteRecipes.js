import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet, Link} from 'react-native';
import {Card,  Title, Paragraph, IconButton, Colors,  ToggleButton, Searchbar, DataTable} from 'react-native-paper';
import { connect } from 'react-redux';

const FavoriteRecipes = (props) =>{
    let recipe = props.recipe;

    return<View style={styles.container}>
          <Searchbar
            placeholder="Search"
          />
        <Card style={styles.container} InnerComponent={Link} to={"./SingleRecipe.js"}>
          <Card.Title title={recipe.title} subtitle="Card Subtitle"  />
          <Card.Cover    style={styles.img} source={{ uri: recipe.imgUrl }} />
          <Card.Actions >
          <IconButton icon="heart" size={34} color={Colors.red600}
            onPress={() => console.log('Pressed')}>Add to Favorite
          </IconButton>
          </Card.Actions>
        </Card>
      </View>
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    marginTop: 15,
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
    recipe: state.recipe
  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(FavoriteRecipes);

