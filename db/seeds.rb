# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# User.destroy_all
# u1 = User.create :name => 'Carmen', :email => 'carmen@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
# u2 = User.create :name => 'Ian', :email => 'ian@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
# u3 = User.create :name => 'Bill', :email => 'bill@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
# u4 = User.create :name => 'Joel', :email => 'joel@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
# u5 = User.create :name => 'Jack', :email => 'jack@ga.com', :password => 'chicken', :password_confirmation => 'chicken'


Reservation.destroy_all
p1 = Reservation.create :flight_id => 1, :row => 10, :column => "C"
p2 = Reservation.create :flight_id => 1, :row => 3, :column => "B"
p3 = Reservation.create :flight_id => 2, :row => 15, :column => "A"
p4 = Reservation.create :flight_id => 2, :row => 20, :column => "D"
p5 = Reservation.create :flight_id => 3, :row => 5, :column => "A"
p6 = Reservation.create :flight_id => 3, :row => 5, :column => "B"

Plane.destroy_all
r1 = Plane.create :name => "747", :rows => 74, :columns => 7
r2 = Plane.create :name => "757", :rows => 75, :columns => 7
r3 = Plane.create :name => "Airbus380", :rows => 80, :columns => 8
r4 = Plane.create :name => "Boeing747", :rows => 47, :columns => 8
r5 = Plane.create :name => "Boeing767", :rows => 67, :columns => 6
r6 = Plane.create :name => "BICJet", :rows => 10, :columns => 4

Flight.destroy_all
f1 = Flight.create :origin => 'SYD', :destination => 'JFK', :date => 2016/04/13, :plane_id => 1
f2 = Flight.create :origin => 'JFK', :destination => 'SYD', :date => 2016/04/14, :plane_id => 2
f3 = Flight.create :origin => 'BRI', :destination => 'MEL', :date => 2016/04/15, :plane_id => 3
