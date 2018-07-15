import expect from 'expect';
import * as actions from '../actions/desafioActions';
import desafioReducer from './desafioReducer';


describe('Desafio Reducer', () => {
  it('Deve testar a função dos dados da api', () => {
      const initialState = [{
        image: 'a',
        name: 'b'
      }];

      const newDesafio = {image: 'teste.com'};
      const action = actions.loadDesafioSuccess(newDesafio);

      const newState = desafioReducer(initialState, action);

      expect(newState).toEqual(newDesafio);
  });
});
