DBMias = new Mongo.Collection("mias");
DBMias.allow({
  insert: function(){ 
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
