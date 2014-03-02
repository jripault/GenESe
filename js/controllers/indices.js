App.IndicesController = Ember.Controller.extend({
    actions: {
        createField: function() {
            var name = this.get('newFieldName');
            if (!name && !name.trim()) {
                return;
            }
            // Create the new Field model
            var field = this.store.createRecord('field', {
                name: name
            });
            // Clear the "New Field" text field
            this.set('newFieldName', '');
            // Add
            this.get('model').get('fields').pushObject(field);
        },
        generateData: function() {
        	console.log('generate data to send to ES');
        }
    }
});