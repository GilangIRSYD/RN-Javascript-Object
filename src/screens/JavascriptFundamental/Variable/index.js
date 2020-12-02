import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Variable extends Component {
  render() {
    let myNumber = []
    let myString = 'Salt Academy';

    let number1 = 5;
    let number2 = 7;
    let sum = number1 + number2;
    let devide = number1 / number2;
    return (
      <View>
        <Text style={{color: 'red', fontWeight: 'bold'}}>Variable Section</Text>
        <Text>
          {myNumber} | {myString}
        </Text>
        <Text>
          {sum} | {devide}
        </Text>
      </View>
    );
  }
}

export default Variable;
