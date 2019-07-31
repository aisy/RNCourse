import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Card, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username: "Aisy"
    }
  }
  
  render() {
    return (
      <View>
        <Button
          title="Solid Button"
        />
        <Button
          icon={
            <Icon
              name={"arrow-right"}
              size={15}
              color={"white"}
            />
          }
          title={" Kanan"}
        />
        <Card>
          <Text>Username : {this.state.username}</Text>
          <Button/>
          <Button/>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 30,
    backgroundColor: "red",
    color: "white"
  }
})