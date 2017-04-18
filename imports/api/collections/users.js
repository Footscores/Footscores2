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
