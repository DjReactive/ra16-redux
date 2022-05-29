import { ADD_SERVICE, REMOVE_SERVICE, EDIT_SERVICE, SAVE_SERVICE } from './actionTypes';

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: {name, price} };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: {id} };
}

export function editService(service) {
  return { type: EDIT_SERVICE, payload: {service} };
}

export function saveService(id, name, price) {
  return { type: SAVE_SERVICE, payload: {id, name, price} };
}
