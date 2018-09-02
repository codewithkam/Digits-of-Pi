import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import math from 'mathjs';
import { Slider } from 'react-native-elements'



export default class Home extends React.Component {

   constructor(props) {
        super(props);

          this.state = {
             value:5
          };

  }



render() {
   
const slider =   
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} 
          style={styles.slider}
          maximumValue={15}
          minimumValue={1}
          maximumTrackTintColor={'grey'}
          thumbTintColor={'white'}
          minimumTrackTintColor={'white'}
          step={1}
          />

const piImage = require('./pi.png')

let decimalPlaces = this.state.value

let pii = math.round(Math.PI, this.state.value) 

    return (
      <View style={styles.container}>

        <Image
          style={{top:40, height: 80, width:80,  }}
          source={piImage} />
       


      
      
        <View style={{flex: 1, justifyContent: 'center'}}>
        {slider}
       <Text style={styles.text}>Decimal Places: {decimalPlaces}</Text>
       <Text style={styles.text}>PI: {pii}</Text>
     </View>

   
     </View>
   

      


    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'#1e2838',
   justifyContent:'center',
   alignItems:'center',
  },
  text: {
  
    fontSize: 18,
    color: 'white',
   
  },
   slider: {
    
    

  },
})