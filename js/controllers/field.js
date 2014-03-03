App.FieldController = Ember.Controller.extend({
    init: function() {
        this.set('generators', this.store.find('generator'));
    }
});