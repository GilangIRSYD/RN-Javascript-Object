import React, {Component} from 'react';
import {Text, View} from 'react-native';

class ObjectPrototype extends Component {
  render() {
    function GameLife(name, energy) {
      this.name = name;
      this.energy = energy;
    }
    GameLife.prototype.eat = function (lot) {
      this.energy += lot;
    };

    let gamer = new GameLife('Gamer 1', 10);
    gamer.eat(10);

    return (
      <View>
        <Text> Object Prototype</Text>
        <Text> Gamer Name : {gamer.name}</Text>
        <Text> Gamer Energy : {gamer.energy}</Text>
      </View>
    );
  }
}

export default ObjectPrototype;
