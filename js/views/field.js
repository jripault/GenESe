App.FieldView = Ember.View.extend({
    templateName: 'views/field',
    generatorView: null,
    generatorChange: function() {
        if (this.generatorView) {
            this.generatorView.popObject();
            var generator = this.get('controller.selectedGenerator');
            if (generator) {
                this.generatorView.pushObject(App.Views.NumberGenerator.create({
                    name: generator.get('name')
                }))
            }
        }
    }.observes('controller.selectedGenerator')
});