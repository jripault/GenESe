App.Models.Esnode = DS.Model.extend({
  nodeUrl: DS.attr('string'),
  indices: DS.hasMany(App.Models.Index),

  getIndices: function(){
  	var node = this;
  	var store = this.store;
  	jQuery.getJSON(this.get('nodeUrl') + '/_cluster/state', function(result){
  		var indices = result.metadata.indices;
  		for (var key in indices){
  			var indexJSON = indices[key];
  			var index = store.createRecord(App.Models.Index, indexJSON);
  			index.set('name', key);
        index.set('indexUrl', node.get('nodeUrl')+'/'+key);
  			node.get('indices').pushObject(index);
  		};
  	});
  }
});