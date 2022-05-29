import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE } from '../actions/actionTypes';

const initialState = { id: 0, name: null, price: 0 };

export default function serviceEditReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SERVICE:
      const {service} = action.payload;
      return service;
    default:
      return state;
  }
}
