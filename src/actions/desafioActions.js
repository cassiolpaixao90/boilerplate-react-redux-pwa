import * as types from "../constants/actionTypes";
import desafioApi from "../api/mockDesafioApi";

export function loadDesafioSuccess(desafio) {
  return { type: types.LOAD_DESAFIO, desafio };
}

export function loadDesafio() {
  return function (dispatch) {
    return desafioApi.getAllDesafio().then(desafio => {
      dispatch(loadDesafioSuccess(desafio));
    }).catch(error => {
      throw (error);
    });
  };
}
