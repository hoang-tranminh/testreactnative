import * as types from './actionTypes';

export function viewDetail() {
    return { type: types.VIEW_DETAIL};
}

export function viewHome() {
    return { type: types.VIEW_HOME};
}

export function viewEdit() {
     return {type: types.VIEW_EDIT};
}

export function viewAdd() {
      return {type: types.VIEW_ADD};
}

export function addItem(title, imagePath, url) {
      return {
        type: types.ADD_ITEM,
        title: title,
        imgPath: imagePath,
        url: url
      };
}

export function viewItem(index) {
      return {
        type: types.VIEW_ITEM,
        index: index
      };
}

export function editItem(index, title, imagePath, url) {
      return {
        type: types.EDIT_ITEM,
        title: title,
        imgPath: imagePath,
        url: url,
        index: index
      };
}


export function deleteItem(index) {
      return {
        type: types.DELETE_ITEM,
        index: index
      };
}

export function setActiveItem(index) {
      return {
        type: types.SET_ACTIVE_ITEM,
        index: index
      };
}