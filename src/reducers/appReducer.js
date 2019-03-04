import {
  CHANGE_SCREEN,
  SAVE_NAME
} from '_actions';
import { createReducer } from '_utils';
import mockData from '_store/initialState.js';

const initialState = {
  ...mockData,
  name: '',
  pageIndex: 0
}

export default createReducer(initialState, {
  [CHANGE_SCREEN]: (state, payload) => ({
    ...state,
    pageIndex: payload
  }),
  [SAVE_NAME]: (state, payload) => ({
    ...state,
    name: payload
  })
});