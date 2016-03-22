Mia = React.createClass({
  render(){
    var adImage = this.props.mia.image ? <img src={this.props.mia.image} className="img-responsive postimage img-thumbnail" alt="image" /> : '';
    return(
      <div>
        <div className="panel panel-default">
          <div className="panel panel-header">
            <h4>{this.props.mia.title}</h4>
          </div>
          <div className="panel-body">
            {adImage}
            <div className="clearfix"></div>
            <hr/>
            {this.props.mia.text}
          </div>
        </div>
      </div>
    )
  }
});
