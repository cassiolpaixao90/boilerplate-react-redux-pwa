import expect from "expect";
import React from 'react';
import { mount, shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {DesafioPage}  from './DesafioPage';


describe('Desafio Componente', () =>{
  it('Deve testar o componente tem class na div', ()=>{
    const props = {
      desafio: []
    };
    const wrapper = mount(<DesafioPage {...props}/>);
    const div = wrapper.find('div').first();
    expect(div.prop('className')).toBe('outer-wrap');
  });
});
