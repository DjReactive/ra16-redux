import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, SAVE_SERVICE } from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      return (() => {
        const {name, price} = action.payload;
        return [...state, {id: nanoid(), name, price: Number(price)}];
      })();
    case REMOVE_SERVICE:
      return (() => {
        const {id} = action.payload;
        return state.filter(service => service.id !== id);
      })();
    case SAVE_SERVICE:
      return (() => {
        const {id, name, price} = action.payload;
        return state.map(service => (service.id === id ?
          {...service, name, price} : service));
      })();
    default:
      return state;
  }
}
