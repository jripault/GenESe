App.Esnode = DS.Model.extend({
    nodeUrl: DS.attr('string'),
    nodeState: DS.attr('string'),
    status: DS.attr('string', {defaultValue: 'disconnected'}),
    indices: DS.hasMany(App.Index),

    getIndices: function () {
        var node = this;
        var store = this.store;
        jQuery.ajax({
              url: this.get('nodeUrl') + '/_cluster/state',
              dataType: 'json',
              type: 'GET'}
        ).done(function (result) {
              var indices = result.metadata.indices;
              for (var key in indices) {
                  var indexJSON = indices[key];
                  var index = store.createRecord(App.Index, indexJSON);
                  index.set('name', key);
                  index.set('indexUrl', node.get('nodeUrl') + '/' + key);
                  node.get('indices').pushObject(index);
              }
              node.set('status', 'connected');
          }).fail(function (jqxhr, textStatus, error) {
              // TODO problem because it does not manage net::ERR_CONNECTION_REFUSED error
              node.set('status', 'error');
          })
    }
});