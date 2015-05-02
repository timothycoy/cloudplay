var React = require('react');
var Game = require('./game.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">Your Games</div>
        </div>
        <div className="row">
          <Game name="Kerbal" image="http://static-cdn.jtvnw.net/ttv-boxart/Kerbal%20Space%20Program-272x380.jpg" href="cloudplay://kerbal" />
          <Game name="League of Legends" image="http://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg"  href="cloudplay://league" />
          <Game name="Minecraft" image="http://static-cdn.jtvnw.net/ttv-boxart/Minecraft-272x380.jpg" href="cloudplay://minecraft" />
        </div>
      </div>
    );
  }
});
