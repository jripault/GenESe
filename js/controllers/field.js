App.FieldController = Ember.Controller.extend({
    init: function() {
        this.set('generators', this.store.find('generator'));
    },
    generatorView: null,
    selectedGenerator: null,

    generatorChange: function() {
        this.get('generatorView').popObject();
        var generator = this.get('selectedGenerator');
        if (generator) {
            this.get('model').set('generator', generator);
            this.get('generatorView').pushObject(App.Views.NumberGenerator.create({
                name: generator.get('name')
            }))
        }
    }.observes('selectedGenerator')
});