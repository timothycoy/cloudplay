var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#/">CloudPlay</a>
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbar-main">
            <ul className="nav navbar-nav navbar-right">
              <li className="">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">the_user@cloudplay.com <b className="caret"></b></a>
                <ul className="dropdown-menu">
                  <li><a href="#/users/password">Change Password</a></li>
                  <li><a href="#/users/logout">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});