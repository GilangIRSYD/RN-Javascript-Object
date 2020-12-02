import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ObjectCreate extends Component {
  render() {
    let gamerMethod = {
      eat: function (lot) {
        this.energy += lot;
      },
      play: function (hour) {
        this.energy -= hour;
      },
      sleep: function (hour) {
        this.energy + hour * 2;
      },
    };
    function GameLife(name, energy) {
      let gamer = Object.create(gamerMethod);
      gamer.name = name;
      gamer.energy = energy;
      return gamer;
    }

    let gamer = GameLife('Gamer 1', 10);
    gamer.eat(10);
    gamer.play(10);
    gamer.sleep(5);

    return (
      <View>
        <Text> Object Create</Text>
        <Text> Gamer Name: {gamer.name}</Text>
        <Text> Gamer Energy: {gamer.energy}</Text>
      </View>
    );
  }
}

export default ObjectCreate;
