class UnclashedValidator < ActiveModel::Validator
  def validate(record)
    clash_reservations = Reservation.all.where({
      :flight_id => record[:flight_id],
      :row => record[:row],
      :column => record[:column]
    })
    if clash_reservations.size > 0
      record.errors[:base] << "This seat is taken"
    end
  end
end

class Reservation < ActiveRecord::Base
  validates_with UnclashedValidator
end
