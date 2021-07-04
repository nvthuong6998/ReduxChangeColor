import React from 'react';
import {View, Text} from 'react-native';
import ChangeBackground from './ChangeBackgroundColor/ChangeBackground';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducers from './rootReducers';
const store = createStore(rootReducers);
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ChangeBackground />
      </View>
    </Provider>
  );
};

export default App;
