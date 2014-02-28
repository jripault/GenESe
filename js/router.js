App.Router.map(function() {
  this.resource('indices', { path: '/indices/:index_name' });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
      var node = this.store.all('esnode');
      if(!node.length || node.length == 0)
      {
          return this.store.createRecord('esnode', {nodeUrl: ''});
      }
      return ;
      //return {};
  },
  actions:{
        connect: function(){
            var esNode = this.currentModel;
            jQuery.getJSON(this.currentModel.nodeUrl, function(json) {
              esNode.save();
            });
        }   
    }
});

App.IndicesRoute = Ember.Route.extend({
  model: function(params) {
    return ;
  }
});