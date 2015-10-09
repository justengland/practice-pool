import { List, Map } from 'immutable';
const initialState = { paused: true };

export function pool(state = initialState, action = null) {
  console.log('pool reducer called', state, action);

  return state;
}