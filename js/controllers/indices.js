App.IndicesController = Ember.Controller.extend({
    actions: {
        createField: function() {
            var name = this.get('newFieldName');
            if (!name && !name.trim()) {
                return;
            }
            // Create the new Field model
            var field = this.store.createRecord(App.Models.Field, {
                name: name,
                generatorOptions: {}
            });
            // Clear the "New Field" text field
            this.set('newFieldName', '');
            // Add
            this.get('model').get('fields').pushObject(field);
        },
        generateData: function() {
            console.log('generate data to send to ES');
            var fields = this.get('model').get('fields');
            var count = this.get('numberRecords') || 1;
            for (var i = 0; i < count; i++) {
                var result = {}
                fields.forEach(function(field) {
                    result[field.get('name')] = field.get('generator').generate(field.get('generatorOptions'));
                })
                console.log("generated result: ", result);
                this.indexData(result);
            };
        }
    },
    indexData: function(data) {
        $.ajax({
            url: this.get('model.indexUrl') + '/mytype',
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: function(data) {
                console.log("Indexing done");
            }
        });
    }
});