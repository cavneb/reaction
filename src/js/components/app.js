/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

var App = React.createClass({
  render: function () {
    var klass = 'container seed';
    return (
      <div className={klass}>
        <header className="header">
          <h1>REACTION</h1>
          <nav className="pure-menu pure-menu-open pure-menu-horizontal">
            <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </nav>
        </header>

        <section className="content">
          {this.props.activeRouteHandler()}
        </section>
      </div>
    );
  }
});

module.exports = App;
