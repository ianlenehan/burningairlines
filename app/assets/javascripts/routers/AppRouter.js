var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'flights/:id' : 'showFlight'
  },

  index: function () {
    var appView = new app.AppView();
    appView.render();
  },

  showFlight: function (id) {
    var flight = new app.Flight({id: id});
    flight.fetch().done( function () {
      var flightView = new app.FlightView({model: flight});
      flightView.render();
    });
  }
});
