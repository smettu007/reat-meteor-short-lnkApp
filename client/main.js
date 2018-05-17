import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import ReactDOM from "react-dom";
import { routes, onAuthChange } from "../imports/routes/routes";
import { Links } from "../imports/api/links";
import '../imports/startup/simple-schema-configuration';

Tracker.autorun(() => {
  const isAutenticated = !!Meteor.userId();
  onAuthChange(isAutenticated);
});

Meteor.startup(() => {
 

 
  ReactDOM.render(routes, document.getElementById("app"));
});
