Main = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    return{
      posts: Posts.find({},{sort:{ createdAt: -1 }}).fetch()
    }
  },
  render(){
    var adobj = { _id: 1, text: 'My firts Ad', title: 'Some Company', image: "http://placehold.it/150x150" };
    var posts = this.data.posts.map(function(record){
      return <Post key={record._id} post={record} />
    });
    return(
      <div className="col-sm-10 col-xs-11" id="main">
          <div>
              <div className="full col-sm-9">
                <div className="row">
                  <div className="col-sm-9">
                    <Statusform/>
                    {posts}
                    <button type="button" className="btn btn-md">More</button>
                  </div>
                  <div className="col-sm-3">
                    <Mia mia={adobj}/>
                  </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
});
