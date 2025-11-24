import { FaRubleSign } from "react-icons/fa";
import { citiesWeekend } from "../../cities";
import { useEffect, useState } from "react";

export const FlightWeekend = () => {
  const [cities, setCities] = useState(citiesWeekend);
  const [removeIndex, setRemoveIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cities.length === 1) {
        setCities(citiesWeekend);
        return;
      }

      setRemoveIndex(0);

      setTimeout(() => {
        setCities((prev) => prev.slice(1));
        setRemoveIndex(null);
      }, 700);
    }, 2000);

    return () => clearTimeout(timer);
  }, [cities]);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center w-[800px] bg-[#1E90FF] h-[274px] mt-2 rounded-[20px] relative overflow-hidden max-[830px]:h-[400px]">
        <div className="flex items-center max-[830px]:flex-col">
          <div className="absolute left-5 top-10 text-[white] w-[230px]">
            <h1 className="font-bold text-[30px]">Куда улететь на выходные</h1>
            <p className="w-[290px]">
              Билеты для тех, кто не хочет на дачу: удобный вылет и короткие
              пересадки
            </p>
          </div>
          {cities.map((details, index) => {
            const isRemoving = index === removeIndex;

            const overlay = 6;
            const offset = index * overlay;

            const transform = isRemoving
              ? `translateX(450px) rotate(20deg)`
              : `translateY(${offset}px)`;

            return (
              <div
                className="shadow-md w-[360px] bg-[white] h-[131px] rounded-[20px] flex justify-center items-center gap-4 absolute duration-400 px-2 max-[390px]:w-[320px] max-[360px]:w-[300px]"
                style={{ transform, zIndex: cities.length - index }}
                key={details.id}
              >
                <img
                  src={details.image}
                  className="w-[115px] h-[115px] rounded-[20px] max-[390px]:w-[100px] max-[360px]:w-[80px]"
                />
                <div>
                  <div className="flex items-center">
                    <h1 className="text-[25px] font-bold">{details.price}</h1>
                    <FaRubleSign size={20} />
                  </div>
                  <div className="mt-3">
                    <p className="font-bold">{details.flight}</p>
                    <p className="text-[#808080]">{details.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
