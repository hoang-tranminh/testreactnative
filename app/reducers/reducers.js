import {combineReducers} from 'redux';
import * as types from '../actions/actionTypes';

export const Screens ={
    HOME:'HOME',
    DETAIL:'DETAIL',
    EDIT:'EDIT',
    ADD:'ADD'
};

const initialState={
    activeScreen: Screens.HOME,
    webSites:[],
    activeWeb:null
};

function activeScreen(state = Screens.HOME, action ) {
    switch(action.type){
        case types.VIEW_DETAIL:
            return Screens.VIEW_DETAIL;
        case types.VIEW_HOME:
            return Screens.VIEW_HOME;
        case types.EDIT:
            return Screens.EDIT;
        case types.ADD:
            return Screens.ADD;
        default:
            return state;
    }
}

function webSites(state=[], action){
     switch(action.type){
            case types.ADD_ITEM:
                return [
                    ...state,
                    {
                        title: action.title,
                        imgPath: action.imgPath,
                        url: action.url
                    }
                ];
            case types.EDIT_ITEM:
                return state.map((web, index) => {
                        if (index === action.index) {
                          return Object.assign({}, web, {
                            title: action.title,
                            imgPath: action.imgPath,
                            url: action.url
                          })
                        }
                        return web;
                      });
            case types.DELETE_ITEM:

                var part1 = index != 0 ? state.slice(0, index): [];
                var part2 = index < state.length ? state.slice(index+1): [];
                return part1.concat(part2);

            default:
                if(state.length ==0) {
                    return [{title:"website1",url:null,imgPath:null},
                            {title:"website2",url:null,imgPath:null},
                            {title:"website3",url:null,imgPath:null},
                            {title:"website4",url:null,imgPath:null},
                            {title:"website5",url:null,imgPath:null},
                            {title:"website6",url:null,imgPath:null},
                            {title:"website7",url:null,imgPath:null},
                            {title:"website8",url:null,imgPath:null},
                            {title:"website9",url:null,imgPath:null},
                            {title:"website10",url:null,imgPath:null},
                            {title:"website11",url:null,imgPath:null},
                            {title:"website12",url:null,imgPath:null},
                            {title:"website13",url:null,imgPath:null},
                            {title:"website14",url:null,imgPath:null},
                            {title:"website15",url:null,imgPath:null},
                            {title:"website16",url:null,imgPath:null},
                            {title:"website17",url:null,imgPath:null},
                            {title:"website18",url:null,imgPath:null},
                            {title:"website19",url:null,imgPath:null},
                            {title:"website20",url:null,imgPath:null},
                            {title:"website21",url:null,imgPath:null},
                            {title:"website22",url:null,imgPath:null},
                            {title:"website23",url:null,imgPath:null},
                            ];
                }
                return state;
        }
}

function activeWeb(state=null, action) {
     switch (action.type){
            case types.SET_ACTIVE_ITEM:
                return action.index;
            default:
                return state;
    }
}

const appReducer = combineReducers({
  activeScreen,
  webSites,
  activeWeb
});

export default appReducer





