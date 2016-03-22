Navbar = React.createClass({
  render(){
    return(
      <div className="navbar navbar-blue navbar-fixed-top">
        <div className="navbar-header">
          <button type="button" data-toggle="collapse" data-target="navbar" className="navbar-toggle" >
            <span className="sr only"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/dashboard" className="navbar-brand logo">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <nav className="collapse navbar-collapse">
          <form role="form" className="navbar-form navbar-left">
            <div className="input-group input-group-sm bs-example">
              <input type="text" ref="searchText" id="typehead" className="form-control" />
              <div className="input-group-btn searchBtn">
                <button type="submit" className="btn btn-default">
                  <i className="fa fa-search"></i>
                </button>
              </div>
          </div>
          </form>
          <ul className="nav navbar-nav">
            <li>
              <a href="/dashboard">
                <i className="fa fa-home"> News Feeds</i>
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a data-toggle="dropdown" href="#" className="dropdown-toggle">
                <i className="fa fa-user"> Nelson Rodriguez</i>
              </a>
              <ul className="dropdown-menu">
                <li><a href="/profile"> Edit Profiel</a></li>
              <li><a href="/signout"> Logout</a>t</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
});
