import { SlMinus, SlPlus } from "react-icons/sl";
import type { IDropdownPassengersProps } from "./types";
import { services } from "../../services";
import { IoMdRadioButtonOn } from "react-icons/io";
import type { TServices } from "../FlightSearchForm/types";

export const DropdownPassengers = ({
  countPassengers,
  setCountPassengers,
  service,
  setService,
}: IDropdownPassengersProps) => {
  const onAddPassengers = (currentName: string) => {
    setCountPassengers((prev) => {
      return prev.map((passenger) =>
        passenger.name === currentName
          ? { ...passenger, count: passenger.count + 1 }
          : passenger
      );
    });
  };

  const onRemovePassengers = (currentName: string) => {
    setCountPassengers((prev) => {
      return prev.map((passenger) => {
        if (
          passenger.name === currentName &&
          passenger.min === 1 &&
          passenger.count === 1
        ) {
          return passenger;
        } else if (passenger.name === currentName && passenger.count > 0) {
          return { ...passenger, count: passenger.count - 1 };
        } else {
          return passenger;
        }
      });
    });
  };

  const onSelectService = (name: TServices) => {
    setService(name);
  };

  const onStopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="shadow-md bg-[white] w-[330px] absolute right-0 top-15.5 rounded-[10px] p-4 z-20 max-[380px]:w-[290px]"
      onClick={onStopPropagation}
    >
      <h1 className="font-bold">Количество пассажиров</h1>
      {countPassengers.map((passenger) => (
        <div key={passenger.name}>
          <div className="mt-4 flex items-center gap-13">
            <p className="flex flex-col w-[190px]">
              <span>{passenger.name}</span>
              <span className="text-[12px] text-[#808080]">
                {passenger.label}
              </span>
            </p>
            <div className="flex items-center gap-3">
              <SlMinus
                size={30}
                color="white"
                className={`cursor-pointer bg-[#00BFFF] rounded-full ${
                  passenger.count === 0 ||
                  (passenger.count === 1 && passenger.min === 1)
                    ? "bg-[#DCDCDC]"
                    : ""
                }`}
                onClick={() => onRemovePassengers(passenger.name)}
              />
              {passenger.count}
              <SlPlus
                size={30}
                color="white"
                className="cursor-pointer bg-[#00BFFF] rounded-full"
                onClick={() => onAddPassengers(passenger.name)}
              />
            </div>
          </div>
          <div className="border-[#C0C0C0] border-b mt-2"></div>
        </div>
      ))}
      <h1 className="font-bold mt-8">Класс обслуживания</h1>
      {services.map((currentService) => (
        <div key={currentService.id}>
          <div className="flex items-center gap-30">
            <div className="mt-6 w-[190px]">{currentService.name}</div>
            <div className="mt-6">
              <IoMdRadioButtonOn
                size={30}
                color="white"
                className={`cursor-pointer ${
                  currentService.name === service
                    ? "bg-[#00BFFF] rounded-full"
                    : "bg-[#DCDCDC] rounded-full"
                }`}
                onClick={() => onSelectService(currentService.name)}
              />
            </div>
          </div>
          <div className="border-[#C0C0C0] border-b mt-2"></div>
        </div>
      ))}
    </div>
  );
};
