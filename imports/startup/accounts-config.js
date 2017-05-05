/* eslint-disable no-plusplus, no-empty-pattern, object-shorthand, prefer-template,
import/no-unresolved, no-underscore-dangle, import/extensions, import/no-extraneous-dependencies,
import/no-named-as-default, no-undef
*/
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});
