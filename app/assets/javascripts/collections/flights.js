var app = app || {};

app.Flights = Backbone.Collection.extend({
  model: app.Flight,
  url:'/flights',

  comparator: function(m) {
    return m.get('date');
  }
});
