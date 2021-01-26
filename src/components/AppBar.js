import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import { Avatar, Title, Paragraph, IconButton, Colors,  ToggleButton, Searchbar, Appbar } from 'react-native-paper';


const AppBar =({navigation}) =>{

  return <Appbar.Header  style={styles.top} >
        <Appbar.BackAction onPress={navigation.goBack} />
        <Appbar.Content color={Colors.black} title='Tasty List'/>
        <Appbar.Action
          icon="plus"
          color={Colors.grey500}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <Appbar.Action
          icon="heart"
          color={Colors.grey500}
          size={20}
          onPress={() => console.log('Pressed')}
        />
        <Appbar.Action icon="menu" size={20} color={Colors.grey500} value="left" />
        </Appbar.Header>
}



const styles = StyleSheet.create({
top:{
  backgroundColor: 'rgb(255,255,255)'
}


});

export default AppBar;

