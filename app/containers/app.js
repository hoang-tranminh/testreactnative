import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from  'react-redux';
import thunk from 'redux-thunk';
import appReducer, {Screens} from '../reducers/reducers';
import WsmApp from './wsmApp';

const store = createStore(appReducer, applyMiddleware(thunk));

export default class WebsitesManageApp extends Component {
    render() {
        return (
        <Provider store={store}>
           <WsmApp/>
        </Provider>);
    }
}

/*export default class WebsitesManageApp extends Component {
    render() {
        return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome kaka to React Native!
                </Text>
            </View>
        </Provider>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/

/*export default class WebsitesManageApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/



/*
import React, {Component} from 'react';
import {createStore, applyMiddleWare} from 'redux';
import {Provider} from 'redux-thunk';
import thunk from 'redux-thunk';

import bestAppReducer, {Screens} from '../reducers/reducers';
import BestApp from './bestApp';

import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


//const createStoreWithMiddleWare = applyMiddleWare(thunk)(createStore);
const store = createStore(bestAppReducer);

export default class App extends Component
{
    render() {
        return (
            */
/*<Provider store={store}>*//*

                */
/*<BestApp/>*//*

                 <View style={styles.container}>
                            <Text style={styles.welcome}>
                                Welcome kaka to React Native!
                            </Text>
                    </View>
            */
/*</Provider>*//*

        );
    }
}
*/
