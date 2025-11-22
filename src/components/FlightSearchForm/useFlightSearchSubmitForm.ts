import { format } from "date-fns";
import { useState } from "react";
import { weekDays } from "../../utils";
import { ru } from "date-fns/locale";
import type { TFlights, TValueService } from "./types";
import { getFlights } from "../../api/getData";

export const useFlightSearchSubmitForm = ({
  count,
  service,
}: TValueService) => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [dateFormatted, setDateFormatted] = useState("");
  const [departureValue, setDepartureValue] = useState("");
  const [arrivalValue, setArrivalValue] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    departure: false,
    arrival: false,
    date: false,
  });
  const [loading, setLoading] = useState(false);
  const [descriptionFlights, setDescriptionFlights] = useState<TFlights[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const submitForm = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!departureValue || !arrivalValue || !dateFormatted) {
      setErrorMessage({
        ...errorMessage,
        departure: !departureValue.trim(),
        arrival: !arrivalValue.trim(),
        date: !dateFormatted.trim(),
      });
    } else {
      const data = {
        city: departureValue.trim(),
        arrivalCity: arrivalValue.trim(),
        date: dateFormatted.trim(),
        countPassenger: count,
        serviceLevel: service,
      };

      setLoading(true);
      const response = await getFlights(data);
      if (response.length === 0) {
        setMessage("По указанным данным пока отсутствуют рейсы");
        setLoading(false);
      } else {
        setDescriptionFlights(response);
        setMessage(null)
        setLoading(false);
        return response;
      }
    }
  };

  const swapValue = () => {
    setDepartureValue(arrivalValue);
    setArrivalValue(departureValue);
  };

  const onFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureValue(event.target.value);
    setErrorMessage({ ...errorMessage, departure: false });
  };

  const onArrivalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArrivalValue(event.target.value);
    setErrorMessage({ ...errorMessage, arrival: false });
  };

  const selectDate = (date: Date | null) => {
    if (date) {
      const raw = format(date, "d MMMM, EEE", { locale: ru });
      const [day, dayWeek] = raw.split(", ");
      const formattedDate = `${day}, ${weekDays[dayWeek]}`;
      setDateFormatted(formattedDate);
      setCurrentDate(date);
      setErrorMessage({ ...errorMessage, date: false });
    }
  };

  return {
    currentDate,
    selectDate,
    dateFormatted,
    submitForm,
    errorMessage,
    onFromChange,
    departureValue,
    onArrivalChange,
    arrivalValue,
    swapValue,
    descriptionFlights,
    loading,
    message,
  };
};
