'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Navigator
} from 'react-native';

import WebsiteList from './websiteList';
import DetailView from './detailView';
import EditView from './editView';
import {Screens} from '../reducers/reducers';

export default class UIRoot extends Component
{
    constructor(props){
        super(props);
    }

    render() {
        const {data, viewItem }= this.props;

         const routes = [
            {title: 'List Scene', index: 0},
            {title: 'View Scene', index: 1},
            {title: 'Edit Scene', index: 2},
          ];

        return (
             <Navigator initialRoute={routes[0]}
                    initialRouteStack={routes}
                    renderScene={(route, navigator) => {
                        if(route.index===0) {
                            return (<WebsiteList title={route.title}
                                                    webs={data.webSites}
                                                    viewFunc={viewItem}

                                                    onForward={ () => {
                                                        navigator.push(routes[1]);
                                                    }}

                                     />);
                        }
                        else if(route.index===1) {
                            return (<DetailView title={route.title}

                                                onForward={ () => {
                                                    navigator.push(routes[2]);
                                                }}

                                                onBack={ () => {
                                                    navigator.pop();
                                                }}
                                    />);
                        }
                        else {
                            return (<EditView   title={route.title}

                                                onBack={ () => {
                                                    navigator.pop();
                                                }}
                                    />);
                        }
                    }}
             />

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'red',
    //borderWidth:2,
    //borderColor:'#000'
  }
  /*,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});



/*<View style={styles.container}>
            <WebsiteList webs={data.webSites} active={active} viewFunc={viewItem} />
        </View>);*/
