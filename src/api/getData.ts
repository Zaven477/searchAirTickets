export const listFlights = [
  {
    id: 1,
    price: 10000,
    city: "Москва",
    arrival: "Дубай",
    date: "20 ноября, чт",
    service: "Эконом",
    departureTime: "12:45",
    arrivalTime: "19:05",
  },
  {
    id: 2,
    price: 9800,
    city: "Москва",
    arrival: "Дубай",
    date: "20 ноября, чт",
    service: "Эконом",
    departureTime: "10:45",
    arrivalTime: "14:05",
  },
  {
    id: 3,
    price: 10500,
    city: "Москва",
    arrival: "Дубай",
    date: "20 ноября, чт",
    service: "Эконом",
    departureTime: "10:30",
    arrivalTime: "14:15",
  },
  {
    id: 4,
    price: 9800,
    city: "Москва",
    arrival: "Дубай",
    date: "27 ноября, чт",
    service: "Комфорт",
    departureTime: "12:45",
    arrivalTime: "19:05",
  },
  {
    id: 5,
    price: 9800,
    city: "Москва",
    arrival: "Дубай",
    date: "27 ноября, чт",
    service: "Комфорт",
    departureTime: "10:20",
    arrivalTime: "13:25",
  },
  {
    id: 6,
    price: 9850,
    city: "Москва",
    arrival: "Дубай",
    date: "2 декабря, вт",
    service: "Комфорт",
    departureTime: "10:30",
    arrivalTime: "14:15",
  },
  {
    id: 7,
    price: 9800,
    city: "Москва",
    arrival: "Дубай",
    date: "27 ноября, чт",
    service: "Бизнес",
    departureTime: "12:45",
    arrivalTime: "19:05",
  },
  {
    id: 8,
    price: 9800,
    city: "Москва",
    arrival: "Дубай",
    date: "27 ноября, чт",
    service: "Бизнес",
    departureTime: "10:20",
    arrivalTime: "13:25",
  },
  {
    id: 9,
    price: 9850,
    city: "Москва",
    arrival: "Дубай",
    date: "2 декабря, вт",
    service: "Бизнес",
    departureTime: "10:30",
    arrivalTime: "14:15",
  },
  {
    id: 10,
    price: 9800,
    city: "Москва",
    arrival: "Дубай",
    date: "27 ноября, чт",
    service: "Первый класс",
    departureTime: "12:45",
    arrivalTime: "19:05",
  },
  {
    id: 11,
    price: 9800,
    city: "Москва",
    arrival: "Дубай",
    date: "29 ноября, cб",
    service: "Первый класс",
    departureTime: "10:20",
    arrivalTime: "13:25",
  },
  {
    id: 12,
    price: 9850,
    city: "Москва",
    arrival: "Дубай",
    date: "2 декабря, вт",
    service: "Первый класс",
    departureTime: "10:30",
    arrivalTime: "14:15",
  },
];

interface IFlights {
  id: number;
  price: number;
  city: string;
  arrival: string;
  date: string;
  service: string;
  departureTime: string;
  arrivalTime: string;
}

type TData = {
  city: string;
  arrivalCity: string;
  date: string;
  countPassenger: number;
  serviceLevel: string;
};

export const getFlights = async (data: TData): Promise<IFlights[]> => {
  const response = await new Promise<IFlights[]>((resolve) => {
    const currentsFlights = listFlights.map((flight) => ({
      ...flight,
      price: flight.price * data.countPassenger,
    }));
    const filterCurrentsFlights = currentsFlights.filter(
      (flight) =>
        flight.city === data.city &&
        flight.arrival === data.arrivalCity &&
        flight.date === data.date &&
        flight.service === data.serviceLevel
    );
    setTimeout(() => resolve(filterCurrentsFlights), 1000);
  });
  return response;
};
