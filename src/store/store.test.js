import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as actions from '../actions/desafioActions';


describe('Desafio Store', () => {
  it('Deve testar handler desafio', () => {

    const initialState = [{
        image: 'a',
        name: 'b'
      }];
      const store = createStore(rootReducer, initialState);
      const desafio = {desafio: {image: 'teste.com'}};
      const action = actions.loadDesafioSuccess(desafio);
      store.dispatch(action);
      const atual = store.getState().desafio;
      const expected = {desafio: {image: 'teste.com'}};
      expect(atual.image).toEqual(expected.image);

  });
});
