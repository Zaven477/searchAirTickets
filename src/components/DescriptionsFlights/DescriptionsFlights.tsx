import type { ICurrentsFlights } from "./types";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { FaRubleSign } from "react-icons/fa";

export const DescriptionsFlights = ({ flight }: ICurrentsFlights) => {
  return (
    <div className="flex justify-center mb-2 pl-2 pr-2">
      <div className="shadow-md max-w-[729px] w-full mt-4 rounded-[20px] bg-[white] relative max-[400px]:mt-10">
        <div className="p-4">
          <span className="text-[#808080]">{flight.service}</span>
          <div className="flex items-center gap-90 max-[720px]:gap-10">
            <h1 className="font-bold text-[26px] flex items-center shrink-0">
              Цена: {flight.price}
              <FaRubleSign />
            </h1>
            <h2 className="bg-[#3CB371] rounded-full pt-1 pb-1 pr-2 pl-2 text-[white] max-w-[143px] w-full text-center shrink-0 max-[400px]:absolute bottom-53">
              Самый дешёвый
            </h2>
          </div>
          <p className="text-center max-[700px]:mt-8">
            Дата вылета: {flight.date}
          </p>
          <div className="flex gap-10">
            <div className="mt-6">
              <p>{flight.departureTime}</p>
              <p>{flight.city}</p>
            </div>
            <div className="relative w-full">
              <div className="h-[6px] mt-15 max-w-[500px] bg-[#808080]"></div>
              <GiAirplaneDeparture className="w-[25px] h-[25px] absolute bottom-2 text-[#808080]" />
              <GiAirplaneArrival className="w-[25px] h-[25px] absolute bottom-2 right-3 text-[#808080]" />
            </div>
            <div className="mt-6">
              <p>{flight.arrivalTime}</p>
              <p>{flight.arrival}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
