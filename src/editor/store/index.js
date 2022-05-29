import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceList';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceEditReducer from '../reducers/serviceEdit';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
  serviceEdit: serviceEditReducer,
});
const store = createStore(reducer);

export default store;
