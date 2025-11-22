import { useEffect, useRef, useState } from "react";
import type DatePicker from "react-datepicker";
import type { IPassengers } from "../DropdownPassengers/types";
import { passengers } from "../../passengers";
import { getPassengersWord } from "./utils";
import { Service, type TServices } from "./types";

export const useFlightSearchForm = () => {
  const datePickerRef = useRef<DatePicker>(null);
  const [isOpen, setIsOpen] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);
  const [countPassengers, setCountPassengers] =
    useState<IPassengers[]>(passengers);
  const count = countPassengers.reduce((acc, item) => acc + item.count, 0);
  const [service, setService] = useState<TServices>(Service.Economy);
  const value = `${count} ${getPassengersWord(count)}`;

  useEffect(() => {
    const onClickAway = (event: MouseEvent) => {
      if (
        currentRef.current &&
        !currentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", onClickAway);

    return () => {
      document.removeEventListener("click", onClickAway);
    };
  }, []);

  const openDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const openCalendar = () => {
    datePickerRef.current?.setOpen(true);
  };

  return {
    datePickerRef,
    openCalendar,
    currentRef,
    openDropdown,
    value,
    isOpen,
    countPassengers,
    setCountPassengers,
    service,
    setService,
    count,
  };
};
