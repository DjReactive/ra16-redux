import { createStore, combineReducers } from 'redux';
import ItemChange from '../reducers/ItemReducer'

const reducer = combineReducers({
  itemsList: ItemChange,
});
const store = createStore(reducer);

export default store;
