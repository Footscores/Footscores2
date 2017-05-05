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

      /*const match = shallow(<Partido partido={partido} />);*/
      const result = mount(<Leaderboard />);
      chai.assert(result.find('table').hasClass('table'));
      chai.assert.equal(result.length,1);
    /*  expect(match.containsMatchingElement(<td className='col-md-4 col-xs-3 matches'>Borussia Dortmund</td>)).to.equal(true);
      expect(match.containsMatchingElement(<p>Buena Suerte!</p>)).to.equal(false);*/
    });
  });

}
