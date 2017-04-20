import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Guesses } from './collections/guesses.js';

if (Meteor.isServer) {
  describe('Guesses', () => {
    describe('methods', () => {
      // It is a good idea to override auth methods.
      const userId = Random.id();
      let guessId;

      beforeEach(() => {
        Guesses.remove({});
      });
      it('Can create guess', () => {
        // Find the internal implementation of the insert guess method so we can
       // test it in isolation
       const addGuess = Meteor.server.method_handlers['guesses.insert'];
       //console.log(Meteor.server);
       // Set up a fake method invocation that looks like what the method expects
       const invocation = { userId };

       const date = Date.now();
       // Run the method with `this` set to the fake invocation
       addGuess.apply(invocation, [{date:date,homeTeam:'Leicester City FC', awayTeam:'Sevilla FC', homeTeamScore:2, awayTeamScore:0}]);

       // Verify that the method does what we expected
       assert.equal(Guesses.find().count(), 1);
      });
    });
  });
}
