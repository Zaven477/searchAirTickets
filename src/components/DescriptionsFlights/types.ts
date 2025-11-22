interface IDescriptionsFlights {
  price: number;
  city: string;
  arrival: string;
  date: string;
  service: string;
  departureTime: string;
  arrivalTime: string;
}

export interface ICurrentsFlights {
  flight: IDescriptionsFlights;
}
