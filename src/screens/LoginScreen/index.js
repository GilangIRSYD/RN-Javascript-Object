import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class LoginScreen extends Component {
  state = {
    detailPersonData: {
      name: 'Gilang Safera Putra',
      address: 'Serdang Asri 2, Pangongan, Tangerang',
    },
  };

  _handlerButtonSubmit = () => {
    this.setState({
      detailPersonData: {
        ...this.state.detailPersonData,
        address: 'disitu',
      },
    });
  };

  render() {
    let numberFirst = 5;
    let numberSecond = 10;
    let total = numberFirst + numberSecond;
    let arrayOfData = [1, 2, 3, 4, 5];
    const {name, address} = this.state;

    return (
      <View>
        <Text>name :{name}</Text>
        <Text>address :{address}</Text>
        <Text>number first : {numberFirst}</Text>
        <Text>total</Text>
        <Text>{total}</Text>
        <Text>lakukan loop disini menggunakan arrayOfData </Text>

        <Text>apa yg dilakukan tombol button?</Text>

        <Button
          title="Submit"
          color="red"
          onPress={() => {
            this._handlerButtonSubmit();
          }}
        />
      </View>
    );
  }
}
