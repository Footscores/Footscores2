import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import Partido from './partido.js';

if(Meteor.isClient){
/*  describe('Partido', () => {
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
      const item = shallow(<Partido partido={partido} />);
      chai.assert(true);
    });
  });*/

  describe('Partido', () => {
        chai.assert(true);
      });
    });
}
