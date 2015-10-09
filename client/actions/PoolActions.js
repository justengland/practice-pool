import { TOGGLE_PAUSE } from '../constants/ActionTypes';

export function togglePause() {
  console.log('togglePaused Action called');
  return {
    type: TOGGLE_PAUSE,
    payload: {
    }
  };
}
