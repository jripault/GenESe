App.FieldView = Ember.View.extend({
    templateName: 'views/field',
    childViewsContainer: Ember.ContainerView.create({}),
    selectedGenerator: null,

    didInsertElement: function() {
        this.childViewsContainer.appendTo(this.$('.view-container'));
    },
    generatorChange: function() {
        this.childViewsContainer.popObject();
        var generator = this.get('selectedGenerator');
        if (generator) {
            this.get('model').set('generator', generator);
            this.childViewsContainer.pushObject(App.Views.NumberGenerator.create({
                name: generator.get('name')
            }))
        }
    }.observes('selectedGenerator')
});