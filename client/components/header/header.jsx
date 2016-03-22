Header = React.createClass({
  render(){
    return(
      <div>
        <span className="navbar-react">
          <i className="fa fa-facebook">rench Social</i>
        </span>
        <div className="collapse navbar-collapse" id="navbar">
          <form role="form" id="signin" className="navbar-form navbar-right">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input className="form-control"  ref="email" placeholder="Email" id="email" />
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa.lock"></i>
              </span>
              <input className="form-control" ref="password" placeholder="Password" id="password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    )
  }
});
