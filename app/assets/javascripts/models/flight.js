var app = app || {};

app.Flight = Backbone.Model.extend({
  defaults: {
    // plane_id
    // plane
    origin: "Sydney",
    destination: "Melbourne"
  },
  urlRoot: "/flights",
  parse: function(response) {
    this.plane = new app.Plane({id: response.plane_id});
    this.plane.fetch();
    this.reservations = new app.Reservations({flight_id: response.id});
    this.reservations.fetch();
    return response;
  }
});
