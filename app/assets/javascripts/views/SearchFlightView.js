var app = app || {};

app.SearchFlightView = Backbone.View.extend({

  events: {
    'click button' : 'searchFlights'
  },

  el: '#searchFlightTemplate',

  searchFlights: function () {
    var origin = this.$el.find('#origin').val();
    var destination = this.$el.find('#destination').val();
    var flights = new app.Flights({ 'origin' : origin, 'destination' : destination });
    flights.fetch().done( function () {
      
    })
  },

  // render: function () {
  //   var searchFlightViewTemplate = $('#')
  // }

});
