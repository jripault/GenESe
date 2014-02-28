App.Router.map(function() {
  this.resource('indices', { path: '/indices/:index_name' });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return {
      url: ''
    };
  },
  actions:{
        connect: function(){
            var esNode = this.store.createRecord('esNode', {url: this.currentModel.url});
            jQuery.getJSON(this.currentModel.url, function(json) {
              esNode.setProperties(json);
            });
        }   
    }
});

App.IndicesRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('indices', params.index_name);
  }
});