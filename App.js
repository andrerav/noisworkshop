import React, { Component } from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import createStore from './src/store';

import AppWithNavigationState from './src/AppWithNavigationState';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Provider store={createStore()}>
      <AppWithNavigationState />
    </Provider>
    );
  }
}
