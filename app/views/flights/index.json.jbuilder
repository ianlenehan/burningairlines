json.array!(@flights) do |flight|
  json.extract! flight, :id, :origin, :destination, :date
  json.url flight_url(flight, format: :json)
end
