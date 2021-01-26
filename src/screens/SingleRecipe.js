import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Card, Avatar, Button, Title, Paragraph, IconButton, Colors,  ToggleButton, Searchbar, Appbar, DataTable } from 'react-native-paper';
import { connect } from 'react-redux';

const SingleRecipe = (props) =>{
  let recipe = props.route.params.recipe;
    return <ScrollView><Card style={styles.container} >
    <Card.Title title={recipe.title} subtitle={recipe.category}  />
    <Card.Content>
    <DataTable>
      <Card.Cover source={{ uri: recipe.imgUrl }} />
        <DataTable.Header>
          <DataTable.Title>Ingredient</DataTable.Title>
          <DataTable.Title>Amount</DataTable.Title>
        </DataTable.Header>

        {recipe.ingredients.map((ing) =>
          <DataTable.Row key={ing.title}>
            <DataTable.Cell>{ing.title}</DataTable.Cell>
            <DataTable.Cell>{ing.amount}</DataTable.Cell>
          </DataTable.Row>
        )}
      </DataTable>
      <Paragraph>{recipe.instructions}</Paragraph>
    </Card.Content>
  </Card>
  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    marginTop: 5,
    borderColor: '#f5f5f5',
    justifyContent: 'center',
  }


});

const mapState = (state) => {
  return {
  }
}

const mapDispatch = (dispatch) => {
  return {

  }
}

export default connect(mapState, mapDispatch)(SingleRecipe);
