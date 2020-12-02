import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class ObjectLiteral extends Component {
  render() {
    const students = {
      name: 'GIlang',
      address: 'Tangerang',
      hobby: 'Coding',
      grade: {
        assignment1: 100,
        assignment2: 90,
        assignment3: 90,
      },
      passing_grade: true,
    };


    return (
      <View>
        <Text style={{color: 'red'}}>=== ObjectLiteral ===</Text>
        <Text>Name : {students.name}</Text>
        <Text>Address : {students.address}</Text>
        <Text>Hoby : {students.hobby}</Text>
        <Text>Assign 1 : {students.grade.assignment1}</Text>
        <Text>Assign 2 : {students.grade.assignment2}</Text>
        <Text>Assign 3 : {students.grade.assignment3}</Text>
        <Text>
          Passing Grade : {students.passing_grade ? 'Lulus' : 'Tidak Lulus'}
        </Text>
      </View>
    );
  }
}
