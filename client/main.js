import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
