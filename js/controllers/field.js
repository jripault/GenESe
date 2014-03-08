App.FieldController = Ember.Controller.extend({
    init: function() {
        this.set('generators', this.store.find(App.Models.Generator));
    },
    selectedGenerator: null,

    generatorChange: function() {
        var generator = this.get('selectedGenerator');
        if (generator) {
            this.get('model').set('generator', generator);
        }
    }.observes('selectedGenerator')
});