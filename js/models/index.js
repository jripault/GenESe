App.Index = DS.Model.extend({
  name: DS.attr('string'),
  generators: DS.hasMany('generator')
});