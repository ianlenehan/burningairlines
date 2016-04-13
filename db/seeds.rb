
User.destroy_all
u1 = User.create :admin => true, :firstname => 'Carmen', :email => 'carmen@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
u2 = User.create :firstname => 'Ian', :email => 'ian@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :firstname => 'Bill', :email => 'bill@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
u4 = User.create :firstname => 'Joel', :email => 'joel@ga.com', :password => 'chicken', :password_confirmation => 'chicken'
u5 = User.create :firstname => 'Jack', :email => 'jack@ga.com', :password => 'chicken', :password_confirmation => 'chicken'


Reservation.destroy_all
p1 = Reservation.create :flight => 'SYD23', :row => 10, :column => "C"
p2 = Reservation.create :flight => 'MEL45', :row => 3, :column => "B"
p3 = Reservation.create :flight => 'MEL55', :row => 15 :column => "A"
p4 = Reservation.create :flight => 'NYC45', :row => 20 :column => "D"
p5 = Reservation.create :flight => 'SYD23', :row => 5 :column => "A"
p6 = Reservation.create :flight => 'SYD23', :row => 5 :column => "B"

Plane.destroy_all
r1 = Plane.create :name => "747", :rows => 74 :columns: 7
r2 = Plane.create :name => "757", :rows => 75 :columns: 7
r3 = Plane.create :name => "Airbus380", :rows => 80 , :columns: 8
r4 = Plane.create :name => "Boeing747", :rows => 47 , :columns: 8
r5 = Plane.create :name => "Boeing767", :rows => 67 , :columns: 6
r6 = Plane.create :name => "BICJet", :rows => 10 , :columns: 4
