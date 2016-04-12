var app = app || {};

app.Plane = Backbone.Model.extend({
  urlRoot:'/planes',
  defaults: {
    name: "Planey McPlane-face",
    rows: 1,
    columns: 1
    // flights
  },
  // parse: function(response) {
  //   var flights = new app.Flights();
  //   flights.fetch({
  //     plane_id: response.id
  //   }).done( function () {
  //     response.flights = flights;
  //   });
  //   return response;
  // }
  // flights: (new app.Flights()).fetch({plane_id: self.id})
  flights: function (callback) {
    var flights = new app.Flights();
    flights.fetch({plane_id: self.id}).done(callback); 
  }
});
