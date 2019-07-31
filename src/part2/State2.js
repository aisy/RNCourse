import React, { Component } from 'react'
import {View, Button, Text} from 'react-native'

export default class stateDemo extends Component {  
  constructor () {    
    super()    
    this.state = {      
      username: ''    
    }  
  }   
  
  AddName = () => {    
    this.setState({      
      username: 'Aisy'    
    })  
  }  
  
  RemoveName = () => {    
    this.setState({     
        username: ""   
    })  
  }  
  
  render () {   
    return( 
      <View>
        <Text>Username : {this.state.username}</Text>
        <Button 
          title="Menambah nama"
          onPress={this.AddName}
        />
        <Button 
          title="Menghapus nama"
          onPress={this.RemoveName}
        />
      </View>
    )
  }
}