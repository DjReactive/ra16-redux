import { nanoid } from 'nanoid';
import { defaultItems } from '../defines'
import { ADD_ITEM, REMOVE_ITEM, FILTER_ITEMS } from '../actions/actionTypes';

const initialState = defaultItems;

export default function ItemChange(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price}];
    case REMOVE_ITEM:
      const {id} = action.payload;
      console.log(id);
      return state.filter(o => o.id !== id);
    default:
      return state;
  }
}
