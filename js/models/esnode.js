App.Models.Esnode = DS.Model.extend({
  nodeUrl: DS.attr('string'),
  nodeState: DS.attr('string'),
  status: DS.attr('string', {defaultValue: 'disconnected'}),
  indices: DS.hasMany(App.Models.Index),

  getIndices: function(){
  	var node = this;
  	var store = this.store;
  	jQuery.getJSON(this.get('nodeUrl') + '/_cluster/state').done(function(result){
  		var indices = result.metadata.indices;
  		for (var key in indices){
  			var indexJSON = indices[key];
  			var index = store.createRecord(App.Models.Index, indexJSON);
  			index.set('name', key);
        index.set('indexUrl', node.get('nodeUrl')+'/'+key);
  			node.get('indices').pushObject(index);
  		};
      node.set('status', 'connected');
  	}).fail( function(jqxhr, textStatus, error){
      node.set('status', 'error');
    }).always(function(){console.log("query done")});
  }
});