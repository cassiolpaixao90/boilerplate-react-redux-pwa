import * as types from "../constants/actionTypes";
import initialState from './initialState';

export default function desafioReducer(state = initialState.desafio, action) {
  switch (action.type) {
    case types.LOAD_DESAFIO:
      return action.desafio;
    default:
      return state;
  }
}
