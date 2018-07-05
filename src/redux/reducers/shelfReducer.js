import { combineReducers } from 'redux';
import { SHELF_ACTIONS } from '../actions/shelfActions';

const shelfItems = (state = [], action) => {
  switch (action.type) {
    case SHELF_ACTIONS.ADD_ITEM:
      return action.payload.item || state;
    default:
      return state;
  }
};

export default shelfItems;