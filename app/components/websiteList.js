'use strict';

import React, { Component } from 'react';
import { ListView, Text, View, TouchableHighlight,Alert, StyleSheet, Image } from 'react-native';

export default class WebsiteList extends Component {

    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(this.props.webs)
        };

    }

    render() {
        return (
          <View style={styles.listContainer}  >
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              renderSeparator= {this._renderSeperator}
            />
          </View>
        );
    }

    _renderRow (rowData:string, sectionID: number, rowID:number,
        highlightRow: (sectionID:number,rowID:number) => void){
         const viewf = this.props.viewFunc;
         const forward = this.props.onForward;
        return (
        <TouchableHighlight onPress={()=>{
                                            viewf(rowID);
                                            forward();
                                        }}
                            underlayColor='#B1B4B5' style={{flex:1, flexDirection:'column'}} >
            <View style={styles.row}>
                <Image style={styles.thumb} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} />
                <Text style={styles.text}>
                    {rowData.title}
                </Text>
            </View>
        </TouchableHighlight>
        );
    }

    _renderSeperator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
          <View
            key={`${sectionID}-${rowID}`}
            style={{
              height: adjacentRowHighlighted ? 4 : 1,
              backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
            }}
          />
        );
      }


}

const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        backgroundColor: 'red'
    },
    row: {
        flex:1,
        flexDirection: 'row',
        alignItems :'center',
        padding: 5,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    text: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row'
    },
});