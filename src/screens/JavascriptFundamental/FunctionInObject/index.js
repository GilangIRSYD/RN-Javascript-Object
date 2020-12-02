import React, {Component} from 'react';
import {Text, View} from 'react-native';

class FunctionInObject extends Component {
  render() {
    let gamerMethode = {
      eat: function (lot) {
        this.energy += lot;
      },
      play: function (hour) {
        this.energy -= hour;
      },
      sleep: function (hour) {
        this.energy += hour * 2;
      },
    };
    function GamerLife(name, energy) {
      let gamer = {};
      gamer.name = name;
      gamer.energy = energy;
      gamer.eat = gamerMethode.eat;
      gamer.play = gamerMethode.play;

      return gamer;
    }
    let gamer = GamerLife('Gamer 1', 10);
    gamer.eat(10);
    gamer.play(5);
    return (
      <View>
        <Text style={{color: 'red', fontWeight: 'bold'}}>
          === Function In Object ===
        </Text>
        <Text>Gamer Name : {gamer.name}</Text>
        <Text>Gamer Energy : {gamer.energy}</Text>
      </View>
    );
  }
}

export default FunctionInObject;
