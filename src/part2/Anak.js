import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import {ListItem} from 'react-native-elements'

export default class Anak extends Component {
  constructor (props) {    
    super(props)  
  }

  render () {
    return(    
      <View>       
        <FlatList
          data={this.props.peoples}
          keyExtractor={item=> item.name}
          renderItem={
            ({item}) =>
            <ListItem
              // key={item.name}
              // leftAvatar={{ source: { uri: l.avatar_url } }}
              title={item.name}
              subtitle={item.status}
            />
          }            
        />
      </View>  
    )
  }
}