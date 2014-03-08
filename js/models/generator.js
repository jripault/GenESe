App.Models.Generator = DS.Model.extend({
  name: DS.attr('string'),

  generate: function(options){
  	throw "Must implement the generate method";
  }
});