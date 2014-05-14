App.FieldController = Ember.Controller.extend({
    init: function() {
        this.set('generators', this.store.find(App.Generator));
        this.set('selectedGenerator', this.get('model').get('generator'));
    },
    selectedGenerator: null,

    generatorChange: function() {
        var generator = this.get('selectedGenerator');
        if (generator) {
            this.get('model').set('generator', generator);
            this.get('model').set('generatorOptions', {});
        }
    }.observes('selectedGenerator')
});