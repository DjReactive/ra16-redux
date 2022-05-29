//import { EDIT_SERVICE } from '../actions/actionTypes';

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    // case EDIT_SERVICE:
    //   const {id, name, price} = action.payload;
    //   return {... state, id, name, price};
    default:
      return state;
  }
}
