publicRoutes = FlowRouter.group({
  name:'publicRoutes'
});

privateRoutes = FlowRouter.group({
  name:'privateRoutes'
});
publicRoutes.route('/', {
  name: 'Home',
  action: function(){
    ReactLayout.render(Homelayout, {})
  }
});

privateRoutes.route('/dashboard', {
  name: 'DashBoard',
  action: function(){
    ReactLayout.render(Layout, {
      sidebar:<Sidebar/>,
      content:<Main/>
    })
  }
});
