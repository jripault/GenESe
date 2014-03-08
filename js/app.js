App = Ember.Application.create();
App.Views = {};
App.Models = {};
Ember.Application.initializer({
    name: "generatorsInit",
    initialize: function(container, application) {
        var store = container.lookup('store:main');
        store.createRecord(App.Models.Generator, {
            name: "number",
            generate: function(options) {
                var min = (options && options.min) || 0;
                var max = (options && options.max) || 100;
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        });
        store.createRecord(App.Models.Generator, {
            name: "string",
            generate: function(options) {
                var text = " ";
                var charset = "abcdefghijklmnopqrstuvwxyz";
                var len = options.max || 5;
                for (var i = 0; i < len; i++) text += charset.charAt(Math.floor(Math.random() * charset.length));
                return text;
            }
        });
    }
})
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'genese'
});