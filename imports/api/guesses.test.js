import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Guesses } from './collections/guesses.js';

if (Meteor.isServer) {
  describe('Guesses', () => {
    describe('methods', () => {
      const userId = Random.id();
      let guessId;

      beforeEach(() => {
        Guesses.remove({});
      });
      it('Can create guess', () => {
        // Find the internal implementation of the insert guess method so we can
       // test it in isolation
       const addGuess = Meteor.server.method_handlers['guesses.insert'];
       // Set up a fake method invocation that looks like what the method expects
       const invocation = { userId };

       const date = new Date();
       // Run the method with `this` set to the fake invocation
       addGuess.apply(invocation, [date,'Leicester City FC', 'Sevilla FC', 2, 0]);

       // Verify that the method does what we expected
       assert.equal(Guesses.find().count(), 1);
      });
    });
  });
}
