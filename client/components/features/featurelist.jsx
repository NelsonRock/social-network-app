Featurelist = React.createClass({
  features:[
    {icon: "fa fa-image fa-2x",  bigtext: "See photos and updaste", littletext: "from friends in News Feed"},
    {icon: "fa fa-share fa-2x",  bigtext: "Share what\'s new", littletext: "in yout pots"},
    {icon: "fa fa-search fa-2x",  bigtext: "See photos and update", littletext: "or what are you lokking for"}
  ],
  render(){
    var rows = this.features.map(function(feature){
    return(
      <li key={feature.icon}>
        <h3 className="btn -btn-lg">
          <i className={feature.icon}></i>
          <span>
            <strong> {feature.bigtext}</strong>
            <small> {feature.littletext}</small>
          </span>
        </h3>
      </li>
    )
  });
  return(
    <div>
      <h2 className="col-md-11 featurelist hidden-xs">
        Partagé avec tes amis et le monde dans ton reseau sociaux.
      </h2>
      <ul className="ds-btn hidden-xs">
        {rows}
      </ul>
    </div>
  )
}
});
