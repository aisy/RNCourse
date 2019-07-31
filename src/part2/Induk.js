import React, { Component } from 'react'
import { View } from 'react-native'
import ComponentAnak from './Anak'

export default class Induk extends Component {  
  constructor () {    
    super()    
    this.state = {      
      peoples: [{        
          name: 'Obi Wan',    
          status: 'Jedi'      
      },{        
          name: 'Luke Skywalker',            
          status: 'Padawan'      
      }]    
    }  
  }  
  
  render () {   
    return( 
      <View>
        <ComponentAnak
          peoples={this.state.peoples}
        />
        <ComponentAnak
          peoples={this.state.peoples}
        />
      </View>
    )
  }
}