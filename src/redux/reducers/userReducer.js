import { combineReducers } from 'redux';
import { USER_ACTIONS } from '../actions/userActions';

const user = (state = null, action) => {
  switch (action.type) {
    case USER_ACTIONS.SET_USER:
      console.log(action.user);
      return action.user || state;
    case USER_ACTIONS.UNSET_USER:
      return null;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case USER_ACTIONS.REQUEST_START:
      return true;
    case USER_ACTIONS.REQUEST_DONE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  isLoading,
});
