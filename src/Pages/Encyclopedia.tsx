import { creatures } from "animal-crossing";
import React, { useState } from "react";

const Encyclopedia = () => {
  // 물고기, 곤충, 해산물 select state
  const [selected, setSelected] = useState("fish");

  // day select state
  const [daySelected, setDaySelected] = useState("whole");

  // 물고기, 곤충, 해산물 selectoption
  const selectOptions = [
    { value: "fish", name: "물고기" },
    { value: "insects", name: "곤충" },
    { value: "seaCreatures", name: "해산물" },
  ];

  // 물고기, 곤충, 해산물 handle
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  // day selectoption
  const daySelectOption = [
    { value: "whole", name: "전체" },
    { value: "january", name: "1월" },
    { value: "february", name: "2월" },
    { value: "march", name: "3월" },
    { value: "april", name: "4월" },
    { value: "may", name: "5월" },
    { value: "june", name: "6월" },
    { value: "july", name: "7월" },
    { value: "august", name: "8월" },
    { value: "september", name: "9월" },
    { value: "october", name: "10월" },
    { value: "november", name: "11월" },
    { value: "december", name: "12월" },
  ];

  // day select handle
  const handleDaySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDaySelected(e.target.value);
  };

  // 선택 월 해당 생물 필터링
  const filterCreatures = creatures.filter((creature) => {
    const monthIndex = daySelectOption.findIndex(
      (item) => item.value === daySelected
    );

    if (daySelected === "whole") {
      if (selected === "fish") {
        return creature.sourceSheet === "Fish";
      } else if (selected === "insects") {
        return creature.sourceSheet === "Insects";
      } else if (selected === "seaCreatures") {
        return creature.sourceSheet === "Sea Creatures";
      } else {
        return true;
      }
    }

    if (selected === "fish" && creature.sourceSheet === "Fish") {
      return creature.hemispheres.north.monthsArray.includes(monthIndex);
    } else if (selected === "insects" && creature.sourceSheet === "Insects") {
      return creature.hemispheres.north.monthsArray.includes(monthIndex);
    } else if (
      selected === "seaCreatures" &&
      creature.sourceSheet === "Sea Creatures"
    ) {
      return creature.hemispheres.north.monthsArray.includes(monthIndex);
    }
  });

  return (
    <>
      <h1>도감</h1>
      <select onChange={handleSelect} value={selected}>
        {selectOptions.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <select onChange={handleDaySelect} value={daySelected}>
        {daySelectOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>

      <div>
        {filterCreatures.map((creature, index) => (
          <div key={index}>
            <img src={creature?.iconImage} alt="" />
            <span className="border-b-2"></span>
            <span>{creature?.translations.kRko}</span>
            <span>{creature.hemispheres.north.monthsArray}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Encyclopedia;
