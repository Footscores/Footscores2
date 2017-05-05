/* eslint-disable */
import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import Leagues from './leagues.jsx';


if(Meteor.isClient){

  describe('Leagues', () => {
    it('Should render leagues properly', () => {

      /*const leagues = shallow(<Partido partido={partido} />);*/
      const leagues = mount(<Leagues />);
    /*  chai.assert.equal(leagues.length,1);*/
      expect(leagues.containsMatchingElement(<h1>Partidos de la semana</h1>)).to.equal(true);
      expect(leagues.containsMatchingElement(<h3>No hay partidos disponibles para esta liga, selecciona otra!</h3>)).to.equal(false);
    /*  expect(leagues.containsMatchingElement(<td className='col-md-4 col-xs-3 leagueses'>Borussia Dortmund</td>)).to.equal(true);
      expect(leagues.containsMatchingElement(<p>Buena Suerte!</p>)).to.equal(false);*/
    });
  });

}
