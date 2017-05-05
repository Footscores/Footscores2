/* eslint-disable */
import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import Profile from './profile.jsx';


if(Meteor.isClient){
  Factory.define('profile', Profile, {});

  describe('Profile', () => {
    it('Should render properly', () => {
      const prof = mount(<Profile />);
      expect(prof.containsMatchingElement(<h4>Estadísticas:</h4>)).to.equal(true);
    });
    it('Length should be one', () => {
      const prof = mount(<Profile />);
      chai.assert.equal(prof.length, 1);
    });
  });

}
