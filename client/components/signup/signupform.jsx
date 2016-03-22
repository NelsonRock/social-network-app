Signupform = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    let data = {};
    data.currentUser = Meteor.user();
    return data;
  },
  getInitialState(){
    return{
      message: '',
      messageClass: ''
    }
  },
  displayError(message){
    this.setState({message : message, messageClass: 'alert alert-danger registerError'});
  },
  handleSubmit(e){
    e.preventDefault();
    this.setState({message: '', messageClass: 'hidden'});
    var that = this;
    var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
    var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
    var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    var user = {
      email: email,
      password: password,
      profile: {
        fullname : (first_name + ' ' + last_name).toLowerCase(),
        first_name: first_name,
        last_name: last_name,
        avatar : 'http://placehold.it/150x150',
        friends:[]
      }
    };
    Accounts.createUser(user, function(e){
       if(e){
         that.displayError(e.reason);
       }
       else{
         FlowRouter.go('/dashboard');
       }
    })
  },
  render(){
    return(
      <div className="row">
        <div className="signup">
          <h1>SignUp</h1>
          <p className="text-muted">
            Il sera toujours gratuit
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-6 form-group">
                <input name="first_name" placeholder="Prenom" type="text" ref="first_name" className="form-control" />
              </div>
              <div className="col-sm-6 form-group">
                <input name="last_name" placeholder="Nom" type="text" ref="last_name" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <input type="text" ref="email" placeholder="Email" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="password" ref="password" placeholder="Password" className="form-control"/>
            </div>
            <button type="submit" className="btn  btn-md btn-success">Sign Up</button>
            <span className={this.state.messageClass}>{this.state.message}</span>
        </div>
        </form>
      </div>
    )
  }
})
