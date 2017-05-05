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
      const profile = Factory.build('profile');
      const prof = mount(<Profile />);
      chai.assert.equal(prof.length, 1);
      expect(prof.containsMatchingElement(<img alt="Imagen de Perfil" src="https://i.imgur.com/a8K6rWA.png" id="profilePic" className="img-responsive" />)).to.equal(true);
    });
  });

}
