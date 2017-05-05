/* eslint-disable */
import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import Leagues from './leagues.jsx';


if(Meteor.isClient){

  describe('Leagues', () => {
    it('Should render leagues properly', () => {

      const leagues = mount(<Leagues />);
      expect(leagues.containsMatchingElement(<h1>Partidos de la semana</h1>)).to.equal(true);
    });
    it('Should not render "No hay partidos disponibles para esta liga"', () => {

      const leagues = mount(<Leagues />);
      expect(leagues.containsMatchingElement(<h3>No hay partidos disponibles para esta liga, selecciona otra!</h3>)).to.equal(false);
    });
  });

}
