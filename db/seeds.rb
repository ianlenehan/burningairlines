
User.destroy_all
u1 = User.create :name => 'Carmen', :email => 'carmen@ga.com', :password => 'chicken',  :password_confirmation => 'chicken'
u2 = User.create :name => 'Ian', :email => 'ian@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :name => 'Bill', :email => 'bill@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
u4 = User.create :name => 'Joel', :email => 'joel@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
u5 = User.create :name => 'Jack', :email => 'jack@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
u6 = User.create :name => 'Admin', :email => 'admin@ga.com', :password => 'chicken', :password_confirmation => 'chicken', :admin => true


Plane.destroy_all

plane_names = ["747", "757", "Airbus380", "Boeing747", "Boeing767", "BICJet"]

(1..20).to_a.each do |i|
  Plane.create({
    :name => "#{plane_names.sample}-#{i}",
    :rows => (10..100).to_a.sample,
    :columns => (4..10).to_a.sample
  })
end

locations = ["SYD", "JFK", "MEL", "BRI", "PER", "ADL"]
dates = ["2016-04-18T12:00:00.000Z",
  "2016-04-19T12:00:00.000Z",
  "2016-04-20T12:00:00.000Z",
  "2016-04-21T12:00:00.000Z",
  "2016-04-22T12:00:00.000Z"]

Flight.destroy_all

(1..60).to_a.each do |i|
  blah = locations.sample(2)
  Flight.create :origin => blah[0], :destination => blah[1], :date => dates.sample, :plane_id => Plane.all.pluck(:id).sample
end

Reservation.destroy_all

@column_names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".chars

def plane_seats plane
  rows = (1..plane.rows).to_a
  columns = @column_names.take plane.columns
  rows.product(columns) # .map {|rc| "#{rc[0]}-#{rc[1]}"}
end


flights = Flight.all
all_seats = []
flights.each do |f|
  all_seats += plane_seats(f.plane).map {|rc| {:flight_id => f.id, :row => rc[0], :column => rc[1]}}
end

number_of_reservations_to_create = all_seats.size/20

reserved_seats = all_seats.sample number_of_reservations_to_create

reserved_seats.each do |seat|
  seat["user_id"] = User.all.pluck(:id).sample
  Reservation.create seat
end
