var app = app || {};

app.Plane = Backbone.Model.extend({
  defaults: {
    name: "Planey McPlane-face",
    rows: 1,
    columns: 1
    // flights
  },
  urlRoot:'/planes'
})
