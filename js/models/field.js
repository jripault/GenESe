App.Models.Field = DS.Model.extend({
	name: DS.attr('string'),
	generator: DS.belongsTo(App.Models.Generator),
	generatorOptions: DS.attr()
});