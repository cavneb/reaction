/** @jsx React.DOM */

if ('production' !== process.env.NODE_ENV) {
  // Enable React devtools
  window['React'] = React;
}

require("../sass/app.scss");
var React = require('react');
var routes = require('./utils/routes');
React.renderComponent(routes, document.getElementById("main"));
