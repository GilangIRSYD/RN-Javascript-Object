import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ObjectFunctionDeclaration extends Component {
  render() {
    function studentObject(name,address,hobby,assign1,assign2,assign3,passing_grade){
        let student = {};
        student.name = name;
        student.address = address;
        student.hobby = hobby;
        student.grade = {
            assignment1 : assign1,
            assignment2 : assign2,
            assignment3 : assign3
        };
        student.passing_grade = passing_grade;
        return student;
    }

    const data = studentObject('Gilang','Tangerang','Coding',100,100,100,true);
    return (
      <View>
        <Text style={{color: 'red', fontWeight: 'bold'}}>
          === Object Function Declaration ===
        </Text>
        <Text>Name : {data.name}</Text>
        <Text>Address : {data.address}</Text>
        <Text>Hoby : {data.hobby}</Text>
        <Text>Assign 1 : {data.grade.assignment1}</Text>
        <Text>Assign 2 : {data.grade.assignment2}</Text>
        <Text>Assign 3 : {data.grade.assignment3}</Text>
        <Text>
          Passing Grade : {data.passing_grade ? 'Lulus' : 'Tidak Lulus'}
        </Text>
      </View>
    );
  }
}
