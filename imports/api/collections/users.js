import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Users = new Mongo.Collection('allusers');

var Schemas = {};

export default Users;

if (Meteor.isServer) {
  Meteor.publish('allusers', function publishUsers() {
    return Meteor.users.find({}, {username:1, profile:1});
  });
}

// Add Validated Method
// import {ValidatedMethod} from 'meteor/mdg:validated-method';

Meteor.methods({
  'users.udpateInfo'({name, picture}) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    if(picture) {
      Meteor.users.update(this.userId, { $set: {"profile.name": name, "profile.picture": picture} });
    } else {
      Meteor.users.update(this.userId, { $set: {"profile.name": name} });
    }
  }
})
