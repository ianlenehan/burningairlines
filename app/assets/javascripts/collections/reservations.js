var app = app || {};

app.Reservations = Backbone.Collection.extend({
  model: app.Reservation,
  url: function () {
    return '/flightreservations?id='+app.flight.get('id');
  }
})
