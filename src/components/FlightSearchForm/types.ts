export const Service = {
  Economy: "Эконом",
  Comfort: "Комфорт",
  Business: "Бизнес",
  FirstСlass: "Первый класс",
} as const;

export type TServices = (typeof Service)[keyof typeof Service];

export type TValueService = {
  count: number;
  service: TServices;
};

export type TFlights = {
  id: number;
  price: number;
  city: string;
  arrival: string;
  date: string;
  service: string;
  departureTime: string;
  arrivalTime: string;
};
