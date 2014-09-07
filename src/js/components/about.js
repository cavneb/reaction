/** @jsx React.DOM */

var React = require('react');
var About = React.createClass({
  render: function() {
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <p>This is a basic React starter kit, based upon <a href="https://github.com/gaearon/react-hot-boilerplate">Dan Abramov's React Hot Boilerplate project</a></p>
        <p>I have taken this project and made it my own by adding in SASS pre-processing, and soon to have Karma test running (with Jasmine). In general, this original boilerplate seems to be the right mix for the build processes involved.</p>
        <p>Please feel free to <a href="https://github.com/megalithic/reaction/fork">fork</a> this project as I did with Dan's original project.</p>
      </article>
    );
  }
});

module.exports = About;
