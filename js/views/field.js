App.FieldView = Ember.View.extend({
    templateName: 'views/field',
    tagName: 'tr',
    generatorView: null,
    generatorChange: function() {
        if (this.generatorView) {
            this.generatorView.popObject();
            var generator = this.get('controller.selectedGenerator');
            if (generator) {
                this.generatorView.pushObject(Ember.View.create({
                    name: generator.get('name'),
                    templateName: 'views/' + generator.get('name') +'Generator'
                }))
            }
        }
    }.observes('controller.selectedGenerator')
});