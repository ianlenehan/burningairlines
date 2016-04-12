var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',

  render: function () {

    var searchFlightTemplate = $('#searchFlightTemplate').html();
    this.$el.html(searchFlightTemplate);

    // var flightView = new app.FlightView();
    // flightView.render();
  }
});
