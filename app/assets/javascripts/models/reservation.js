var app = app || {};

app.Reservation = Backbone.Model.extend({
  defaults: {
    // user_id
    // user
    // flight_id
    // flight
    row: 1,
    column: "A",
    seatId:"1-A" // do this in the parse.
  },
  urlRoot: "/reservations"
})
