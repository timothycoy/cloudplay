var React = require('react');
var Navigation = require('./navigation.jsx');
var Games = require('./games.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Navigation />
        <Games />
      </div>
    );
  }
});
