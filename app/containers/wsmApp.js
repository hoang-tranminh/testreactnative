'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import UIRoot from '../components/uiRoot';
import * as appActions from '../actions/actions';
import * as actionTypes from '../actions/actionTypes';

class WsmApp extends Component
{
    constructor(props){
        super(props);
    }

    render() {
        const {state, actions} = this.props;
        return (
            <UIRoot data={state} {...actions} />
            );
    }
}


export default connect(
    state => ({
        state:state
    }),
    (dispatch) => ({
        actions:bindActionCreators(appActions, dispatch)
    })
)(WsmApp);