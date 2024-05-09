interface Flight {
  flightOffer: FlightOffer
}

interface FlightOffer {
  itineraries: Itinerary[]
  price: string
  fareBasis: string[][]
  class: string[][]
  seat: string[][]
}

interface Itinerary {
  segments: Segment[]
  duration: string
}

interface Segment {
  departure: {
    iataCode: string
    at: string
  }
  arrival: {
    iataCode: string
    at: string
  }
  marketingCarrier: string
  carrierCode: string
  flightNumber: string
  aircraft: string
}
