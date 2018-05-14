import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker'
import ReactDOM from 'react-dom';
import { routes, onAuthChange } from '../imports/routes/routes';
import { Links } from '../imports/api/links';

Tracker.autorun(() => {

  const isAutenticated = !!Meteor.userId();
  onAuthChange(isAutenticated);

})



Meteor.startup(() => {
  Meteor.call("greetUser", (err, res) => {
    console.log("greet user arg", err, res)
  })

  ReactDOM.render(routes, document.getElementById("app"))

});