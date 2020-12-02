import React, {Component} from 'react';
import {View, Text} from 'react-native';

class ObjectConstructor extends Component {
  render() {
    function studentObject(
      name,
      address,
      hobby,
      assigment1,
      assigment2,
      assigment3,
      passing_grade,
    ) {
      this.name = name;
      this.address = address;
      this.hobby = hobby;
      this.grade = {
        assigment1: assigment1,
        assigment2: assigment2,
        assigment3: assigment3,
      };
      this.passing_grade = passing_grade;
    }

    let data = new studentObject(
      'Student1',
      'Address1',
      'Codding',
      80,
      90,
      92,
      true,
    );
    return (
      <View>
        <Text style={{color: 'red', fontWeight: 'bold'}}> == Object Section ==</Text>
        <Text> Name : {data.name}</Text>
        <Text> Address : {data.address}</Text>
        <Text> Hobby : {data.hobby}</Text>
        <Text> Assgiment1 : {data.grade.assigment1}</Text>
        <Text> Assgiment2 : {data.grade.assigment2}</Text>
        <Text> Assgiment3 : {data.grade.assigment3}</Text>
        <Text> Passing Grade : {data.passing_grade ? 'Pass' : 'Not Pass'}</Text>
      </View>
    );
  }
}

export default ObjectConstructor;
