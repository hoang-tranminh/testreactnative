'use strict';

import React, { Component } from 'react';
import { ListView, Text, View, TouchableHighlight,Alert, StyleSheet, Image } from 'react-native';

export default class DetailView extends Component {

    // Initialize the hardcoded data
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}  >
                <TouchableHighlight onPress={()=>   {
                                                   this.props.onBack();
                                                   }}
                                   underlayColor='#B1B4B5' style={{flex:1, flexDirection:'column'}} >

                    <Text style={styles.text}>
                        Edit view. Click to go back.
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'blue',
        alignItems :'center',
        justifyContent :'center'
    },

    text: {
        color: 'red',
        margin: 10
    },
});