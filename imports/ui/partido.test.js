import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { chai, expect } from 'meteor/practicalmeteor:chai';
import Partido from './partido.jsx';


if(Meteor.isClient){
  Factory.define('partido', Partido, {});

  describe('Partido', () => {
    it('Should render match properly', () => {
      const partido = Factory.build('partido',
     { awayTeamId:4,
        awayTeamName:"Borussia Dortmund",
        competitionId:440,
        date:"2017-04-19T18:45:00Z",
        homeTeamId:548,
        homeTeamName:"AS Monaco FC",
        id:155360,
        matchday:8,
        odds:{awayWin:2, draw:3, homeWin:1},
        result:{goalsAwayTeam:null, goalsHomeTeam:null},
        status:"TIMED"
      });
      /*const match = shallow(<Partido partido={partido} />);*/
      const match = mount(<Partido partido={partido} />);
      chai.assert.equal(match.length,1);
      expect(match.containsMatchingElement(<td className='col-md-4 col-xs-3 matches'>AS Monaco FC</td>)).to.equal(true);
      expect(match.containsMatchingElement(<td className='col-md-4 col-xs-3 matches'>Borussia Dortmund</td>)).to.equal(true);
      expect(match.containsMatchingElement(<p>Buena Suerte!</p>)).to.equal(false);
    });
  });

}
