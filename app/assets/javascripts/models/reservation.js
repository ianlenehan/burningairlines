var app = app || {};

app.Reservation = Backbone.Model.extend({
  defaults: {
    // user_id
    // user
    // flight_id
    // flight
    row: 1,
    column: "A",
    seatID:"1-A" // do this in the parse.
  },
  initialize: function () {
    this.set("seatID" , this.get('row') + this.get('column'));
  },
  urlRoot: "/reservations"
})
