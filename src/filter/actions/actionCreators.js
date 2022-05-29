import { FILTER_ITEMS, ADD_ITEM, REMOVE_ITEM } from './actionTypes';

// Filter
export function filterItems(filter) {
  return { type: FILTER_ITEMS, payload: {filter} };
}

// Item Change
export function addItem(name, price) {
  return { type: ADD_ITEM, payload: {name, price} }
}

export function removeItem(id) {
  return { type: REMOVE_ITEM, payload: {id} }
}
