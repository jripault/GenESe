App.Field = DS.Model.extend({
	name: DS.attr('string'),
	generator: DS.belongsTo(App.Generator),
	generatorOptions: DS.attr()
});