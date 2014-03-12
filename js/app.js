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
            charset: "abcdefghijklmnopqrstuvwxyz",
            charsetLength: 26,
            generate: function(options) {
                var text = " ";
                var len = options.max || 5;
                for (var i = 0; i < len; i++) text += this.charset.charAt(Math.floor(Math.random() * this.charsetLength));
                return text;
            }
        });
        store.createRecord(App.Models.Generator, {
            name: "id",
            idSequence: 0,
            init: function(){
            	this.idSequence = 0;
            },
            generate: function(options) {
                return this.idSequence++;
            }
        });
    }
})
App.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'genese'
});