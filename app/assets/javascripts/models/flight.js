var app = app || {};

app.Flight = Backbone.Model.extend({
  defaults: {
    // plane_id
    // plane
    origin: "Sydney",
    destination: "Melbourne"
  },
  urlRoot: "/flights"
})
