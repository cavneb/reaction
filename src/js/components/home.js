/** @jsx React.DOM */

var React = require('react/addons');
var helpers = require('../utils/helpers');

var Home = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {
      tools: [
        {id: 1, name: "Webpack", href: "http://webpack.github.io/"},
        {id: 2, name: "React Hot Reload", href: "https://github.com/gaearon/react-hot-loader"},
        {id: 3, name: "React Router", href: "https://github.com/rackt/react-router"},
        {id: 4, name: "PureCSS (via CDN)", href: "http://purecss.io/"},
        {id: 5, name: "Font Awesome Icons", href: "http://fortawesome.github.io/Font-Awesome/icons/"},
      ]
    };
  },

  render: function() {
    var toolingList = this.state.tools.map(function(tool, i) {
      return <li key={tool.id}><a href={tool.href} title={tool.name} target="_blank">{tool.name}</a></li>;
    });
    return (
      <article>
        <h2 className="content-subhead">{this.props.name}</h2>
        <div className="results-content pure-g">
          <div className="pure-u-md-1-1">
            <ul>{toolingList}</ul>
          </div>
        </div>
      </article>
    );
  }
});

module.exports = Home;
