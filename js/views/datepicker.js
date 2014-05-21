App.DatePickerField = Ember.View.extend({
    templateName: 'views/datepicker',
    didInsertElement: function () {
        var self = this;
        var onChangeDate = function (date) {
            self.set('value', date);
        }
        this.$('.datepicker').datepicker({
            separator: "-",
            onClose: onChangeDate}
        )
    }
})