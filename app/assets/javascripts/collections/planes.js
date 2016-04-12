var app = app || {};

app.Planes = Backbone.Collection.extend({
  model: app.Plane,
  url:'/planes'
})
