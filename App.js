import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import ObjectTraining from './src/screens/JavascriptFundamental/ObjectTraining';
import ObjectLiteral from './src/screens/JavascriptFundamental/ObjectLiteral';
import ObjectFunctionDeclaration from './src/screens/JavascriptFundamental/ObjectFunctionDeclaration';
import FuntionInObject from './src/screens/JavascriptFundamental/FunctionInObject';
import ObjectCreate from './src/screens/JavascriptFundamental/ObjectCreate';
import ObjectPrototype from './src/screens/JavascriptFundamental/ObjectPrototype';
import ObjectConstructor from './src/screens/JavascriptFundamental/ObjectConstruct';
import Variable from './src/screens/JavascriptFundamental/Variable';

const App: () => React$Node = () => {
  return (
    <View style={{padding: 16}}>
      <ScrollView>
        {/* <LoginScreen /> */}
        <Variable/>
        <ObjectTraining />
        <ObjectLiteral />
        <ObjectFunctionDeclaration />
        <ObjectConstructor />
        <FuntionInObject />
        <ObjectCreate />
        <ObjectPrototype />
      </ScrollView>
    </View>
  );
};

export default App;
