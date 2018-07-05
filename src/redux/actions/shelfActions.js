export const SHELF_ACTIONS = {
  GET_SHELF: 'GET_SHELF',
  GET_SHELF_USERS: 'GET_SHELF_USERS',
  ADD_ITEM: 'ADD_ITEM',
};

export const getShelf = () => ({
  type: SHELF_ACTIONS.GET_SHELF
});

export const getUserInfo = () => ({
  type: SHELF_ACTIONS.GET_SHELF_USERS
});

export const addItemToShelf = (item) => ({
  type: SHELF_ACTIONS.ADD_ITEM,
  payload: { item }
});