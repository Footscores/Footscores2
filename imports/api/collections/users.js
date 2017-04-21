import { Mongo } from 'meteor/mongo';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

const Users = new Mongo.Collection('allusers');

var Schemas = {};

export default Users;

if (Meteor.isServer) {
  Meteor.publish('allusers', function publishUsers() {
    return Meteor.users.find({}, {username:1, profile:1});
  });
}

Users.deny({
  remove() {
    return true;
  }
});

export const updateInfo = new ValidatedMethod({
  name: 'users.updateInfo',
  validate: new SimpleSchema({
    name: {
      type: String,
      optional: false,
      min: 5,
      max: 20
    },
    picture: {
      type: String,
      optional: true
    }
  }).validator(),
  run({name, picture}) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    if(picture) {
      Meteor.users.update(this.userId, { $set: {"profile.name": name, "profile.picture": picture} });
    } else {
      Meteor.users.update(this.userId, { $set: {"profile.name": name} });
    }
  }
});
