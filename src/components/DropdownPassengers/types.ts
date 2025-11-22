import type { SetStateAction } from "react";
import type { TServices } from "../FlightSearchForm/types";

export interface IPassengers {
  name: string;
  label: string;
  count: number;
  min: number;
}

export interface IDropdownPassengersProps {
  countPassengers: IPassengers[];
  setCountPassengers: React.Dispatch<SetStateAction<IPassengers[]>>;
  service: string;
  setService: React.Dispatch<SetStateAction<TServices>>;
}


export type TCurrentServices = {
  id: string;
  name: TServices;
}
