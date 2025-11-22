export const getPassengersWord = (count = 1) => {
  const plural = new Intl.PluralRules("ru-RU");

  const passengersWordVariants = {
    one: "пассажир",
    few: "пассажира",
    many: "пассажиров",
    other: "пассажиров",
  };

  return passengersWordVariants[
    plural.select(count) as "one" | "few" | "many" | "other"
  ];
};
