App.Generator = DS.Model.extend({
  name: DS.attr('string'),

  prepare: function(){

  },

  generate: function(options){
  	throw "Must implement the generate method";
  }
});