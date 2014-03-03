App = Ember.Application.create();
App.Views = {};

Ember.Application.initializer({
	name: "generatorsInit",

	initialize: function(container, application){
		var store = container.lookup('store:main');
		store.createRecord('generator', {name:"basic"});
		store.createRecord('generator', {name:"number"});
	}
})

App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'genese'
});

