# Burning Airlines!

The requirements for this project were as follows:

* An admin can create planes on the /airplanes page. COMPLETE
* A plane has a name, rows, and columns. COMPLETE
* When a new plane is saved the page should show a seating diagram. SORT OF
* An admin can create flights on the /flights page. COMPLETE
* A flight has a flight number, origin, destination, date, and plane. COMPLETE
* When a new flight is saved, the page should show a list with the newest date at the top of the list and the number of available seats on the plane. SORT OF
* A user can search for flights on the /search page. The search page should have an input form for the origin and destination. When a user creates a search, the page should show a list of flights with the newest date at the top, and include the number of available seats on the flight. COMPLETE (sans avail seats)
* When the user selects a flight, we should go to the show page ie, /flights/3. The plane show page should show a seating diagram with available seats and seats that have been selected, with their names. COMPLETE (sans names)
* A user can select a seat. COMPLETE
* When a seat is saved, the available seats on the /flights page should update. COMPLETE

Server side reservation conflicts, and client/server race conditions involving reservations, were avoided by having a validator in `app/models/reservation.rb`.

## Burning Airlines Crew

* Bill
* Carmen
* Ian
