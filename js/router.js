App.Router.map(function() {
  this.resource('indices', { path: '/indices/:index_name' });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
      // var node = this.store.all('esnode');
      // if(!node.length || node.length == 0)
      // {
      //     return this.store.createRecord('esnode', {nodeUrl: ''});
      // }
      return this.store.createRecord(App.Esnode, {nodeUrl: "http://localhost:9200"});
      //return {};
  },
  actions:{
        connect: function(){
          // check the node
          var node = this.currentModel;
          node.get('indices').clear();
            jQuery.getJSON(node.get('nodeUrl'), function(json) {
              if(json.status == 200){
                node.getIndices();
              }
            });
        }   
    }
});

App.IndicesRoute = Ember.Route.extend({
  model: function(params) {
    // TODO check if indices are fetched
    var index = this.store.find(App.Index, {name: params.index_name})
    return index;
  },
  serialize: function(model) {
    // this will make the URL `/posts/foo-post`
    return { index_name: model.get('name') };
  },
  setupController: function(controller, index){
    controller.set('model', index);
  }
});