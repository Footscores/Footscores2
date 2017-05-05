/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef, prefer-arrow-callback
*/
import { Mongo } from 'meteor/mongo';

export default Competitions = new Mongo.Collection('competitions');
