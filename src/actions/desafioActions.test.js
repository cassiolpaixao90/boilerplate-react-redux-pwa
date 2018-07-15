import expect from "expect";
import * as desafioActions from './desafioActions';
import * as types from '../constants/actionTypes';

describe('Desafio Actions', () => {

  describe('1- Cénario de Sucesso', () => {

    it('Deve carregar a ação do loadDesafioSuccess', () => {

      const desafio = {image: "", name: ""} ;
      const expectedAction = {
        type: types.LOAD_DESAFIO,
        desafio: desafio
      };
      const action = desafioActions.loadDesafioSuccess(desafio);
      expect(action).toEqual(expectedAction);
    });
  });

  describe('2- Cénario de Error', () => {

    it('Deve carregar a ação do loadDesafioSuccess e verificar se a variveis estão definidos', () => {

      const desafio = {image: "https://github.com/b2w-marketplace/code-challenge/blob/master/files/avatar-dev.png", name: "teste"} ;
      const expectedAction = {
        type: types.LOAD_DESAFIO,
        desafio: desafio
      };
      const action = desafioActions.loadDesafioSuccess(desafio);
      expect(action.desafio.image).toEqual(expectedAction.desafio.image);
    });
  });
});
