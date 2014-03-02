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
      return this.store.createRecord('esnode', {nodeUrl: "http://192.168.1.13:9200"});
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
    return this.store.find('indices', {name: params.index_name});
  },
  serialize: function(model) {
    // this will make the URL `/posts/foo-post`
    return { index_name: model.get('name') };
  }
});