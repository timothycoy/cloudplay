var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="col-lg-3">
        <a href={this.props.href}>
          <img src={this.props.image} />
        </a>
      </div>
    );
  }
});
