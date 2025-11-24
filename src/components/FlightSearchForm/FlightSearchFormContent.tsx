import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";
import { RiCalendarEventFill } from "react-icons/ri";
import { DropdownPassengers } from "../DropdownPassengers/DropdownPassengers";
import { FaCaretDown } from "react-icons/fa";
import { useFlightSearchForm } from "./useFlightSearchForm";
import { useFlightSearchSubmitForm } from "./useFlightSearchSubmitForm";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { DescriptionsFlights } from "../DescriptionsFlights/DescriptionsFlights";
import { BarLoader } from "react-spinners";
import { FlightWeekend } from "../FlightWeekend/FlightWeekend";

export const FlightSearchFormContent = () => {
  registerLocale("ru", ru);
  const {
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
  } = useFlightSearchForm();
  const {
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
  } = useFlightSearchSubmitForm({ count, service });

  return (
    <div>
      <div className="bg-[#00BFFF] p-5 max-[650px]:pb-25">
        <form className="flex gap-0.5 justify-center" onSubmit={submitForm}>
          <div className="flex gap-0.5 max-[450px]:flex-col max-[450px]:gap-2">
            <div className="relative flex gap-0.5 max-[1076px]:flex-col max-[450px]:gap-2">
              <div className="relative">
                <input
                  className={`bg-[white] rounded-l-[15px] h-[60px] pl-2 w-[210px] outline-none ${
                    errorMessage.departure
                      ? "border-[2px] border-[#DC143C]"
                      : ""
                  } max-[380px]:w-[290px] max-[420px]:w-[340px] max-[450px]:w-[380px] max-[1076px]:rounded-l-none`}
                  type="text"
                  placeholder="Откуда"
                  name="from"
                  onChange={onFromChange}
                  value={departureValue}
                />
                {errorMessage.departure && (
                  <p className="absolute bottom-10 left-3 text-[white] bg-[#DC143C] pl-2 pr-2 h-[20px] flex items-center">
                    Укажите город
                  </p>
                )}
              </div>
              <LiaExchangeAltSolid
                className="absolute left-49.5 top-4 z-10 shadow-md w-[23px] h-[23px] rounded-full bg-[white] cursor-pointer max-[1076px]:top-11 max-[1076px]:left-45 max-[1076px]:hidden"
                onClick={swapValue}
              />
              <div className="relative">
                <input
                  className={`bg-[white] h-[60px] pl-4 w-[210px] outline-none ${
                    errorMessage.arrival ? "border-[2px] border-[#DC143C]" : ""
                  } max-[380px]:w-[290px] max-[420px]:w-[340px] max-[450px]:w-[380px] max-[450px]:pl-2 max-[1076px]:pl-2`}
                  type="text"
                  placeholder="Куда"
                  name="to"
                  onChange={onArrivalChange}
                  value={arrivalValue}
                />
                {errorMessage.arrival && (
                  <p className="absolute bottom-10 left-2 text-[white] bg-[#DC143C] h-[20px] pl-1 pr-1 flex items-center">
                    Укажите город прибытия
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-0.5 max-[450px]:gap-2 max-[870px]:flex-col">
              <div className="relative z-20">
                <DatePicker
                  className={`bg-[white] h-[60px] pl-2 w-[210px] cursor-pointer outline-none ${
                    errorMessage.date ? "border-[2px] border-[#DC143C]" : ""
                  } max-[380px]:w-[290px] max-[420px]:w-[340px] max-[450px]:w-[380px]`}
                  placeholderText="Когда"
                  selected={currentDate}
                  ref={datePickerRef}
                  locale="ru"
                  name="date"
                  minDate={new Date()}
                  onChange={selectDate}
                  dateFormat={dateFormatted}
                  shouldCloseOnSelect={false}
                />
                {errorMessage.date && (
                  <p className="absolute bottom-10 left-2 text-[white] bg-[#DC143C] pl-2 pr-2 h-[20px] flex items-center max-[1076px]:bottom-25 max-[870px]:top-0">
                    Укажите дату
                  </p>
                )}
                <RiCalendarEventFill
                  className="absolute top-5 right-3 cursor-pointer"
                  size={20}
                  color="#00BFFF"
                  onClick={openCalendar}
                />
              </div>
              <div className="relative" ref={currentRef} onClick={openDropdown}>
                <input
                  className="bg-[white] h-[60px] pl-2 w-[210px] rounded-r-[15px] cursor-pointer pb-4 max-[450px]:w-[380px] max-[1076px]:rounded-r-none max-[380px]:w-[290px] max-[420px]:w-[340px]"
                  type="text"
                  value={value}
                  readOnly
                  name="passengers"
                />
                <span className="absolute top-7 right-23 text-[#808080] cursor-pointer w-[110px] max-[450px]:right-65 max-[420px]:left-3">
                  {service}
                </span>
                <FaCaretDown
                  className={`absolute top-5 right-3 cursor-pointer ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  color="#C0C0C0"
                />
                {isOpen && (
                  <DropdownPassengers
                    countPassengers={countPassengers}
                    setCountPassengers={setCountPassengers}
                    service={service}
                    setService={setService}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="relative">
            <button className="rounded-[15px] w-[180px] h-[60px] bg-amber-600 text-[white] ml-2 cursor-pointer max-[650px]:absolute top-35 right-30 max-[450px]:top-70 max-[450px]:right-25 max-[420px]:right-20 max-[380px]:right-15">
              Найти билеты
            </button>
          </div>
        </form>
      </div>
      {loading ? (
        <BarLoader width={1200} height={5} color="red" />
      ) : message ? (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[18px] max-w-[405px] w-full text-center pl-2 pr-2 max-[450px]:top-150">
          {message}
        </p>
      ) : (
        <>
          <FlightWeekend />
          {descriptionFlights.map((flight) => (
            <DescriptionsFlights flight={flight} key={flight.id} />
          ))}
        </>
      )}
    </div>
  );
};
