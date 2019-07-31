import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default class stateDemo extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: "Ais"
    }
  }

  render () {    
    return (
      <View>
        <Text>{this.state.username}</Text>
      </View>
    )  
  }
}