/* eslint-disable */
import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import Leaderboard from './leaderboard.jsx';


if(Meteor.isClient){

  Meteor.user = function() {
        return {
          'username': 'testUser',
          'profile':{'score':21}
        };
    };
  describe('Leaderboard', () => {
    beforeEach(function () {

        // console.log(Meteor.user());
        const user = {
            'username': 'testUser',
            'profile':{'score':21}
        };
    });
    it('Should render leaderboard properly', () => {

      const result = mount(<Leaderboard />);
      chai.assert(result.find('table').hasClass('table'));
    });
    it('Length should be one', () => {

      const result = mount(<Leaderboard />);
      chai.assert.equal(result.length,1);
    });
  });

}
