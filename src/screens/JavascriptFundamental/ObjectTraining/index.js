import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ObjectTraining extends Component {
  render() {
    let students = {
      name: 'GIlang',
      address: 'Serdang Asri',
      hobby: 'Codding',
      Grade: {
        assignment1: 100,
        assignment2: 99,
        assignment3: 98,
      },
      passing_grade: true,
    };
    return (
      <View>
        <Text style={{color: 'red', fontWeight: 'bold'}}>
          === Object Section ===
        </Text>
        <Text>{JSON.stringify(students)}</Text>
      </View>
    );
  }
}

export default ObjectTraining;
