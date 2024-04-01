import { villagers } from "animal-crossing";
import { PersonalityToKorean } from "../utils/AnimalKr";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Personality = () => {
  // 동물 성향 select state
  const [personalitySelected, setPersonalitySelected] = useState("All");

  // 주민성향 불러오기
  const animalPersonality = [...new Set(villagers.map((p) => p.personality))];

  //주민 성향 한국어 번역
  const PersonalityTitle = animalPersonality.map((animalP) => {
    animalP = PersonalityToKorean(animalP);
    return animalP;
  });

  // 성격별 유형 option
  const personalityOption = [
    { value: "All", name: "전체" },
    { value: "Jock", name: "운동광" },
    { value: "Cranky", name: "무뚝뚝" },
    { value: "Peppy", name: "아이돌" },
    { value: "Big Sister", name: "단순활발" },
    { value: "Lazy", name: "먹보" },
    { value: "Normal", name: "친절함" },
    { value: "Snooty", name: "느끼함" },
  ];

  // 성격별 onchange handle
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersonalitySelected(e.target.value);
  };

  // 성격별 필터링 함수
  const filterVillagers = () => {
    if (personalitySelected === "All") {
      return villagers;
    }
    return villagers.filter(
      (villager) => villager.personality === personalitySelected
    );
  };

  return (
    <div>
      <div className="flex flex-col  justify-end mb-10 text-center">
        <span className="mb-2 text-2md">성격 유형을 골라보세요 !</span>
        <select
          className="text-center text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleSelect}
          value={personalitySelected}
        >
          {personalityOption.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {personalitySelected === "All" ? (
        animalPersonality.map((personality, index) => (
          <div className="mb-20" key={personality}>
            <div className="flex justify-center mb-7 text-3xl">
              <h2>{PersonalityTitle[index]}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {villagers
                .filter((villager) => villager.personality === personality)
                .map((villager) => (
                  <Link to={`/Villager/${villager.name}`} key={villager.name}>
                    <div className="border hover:border-dotted bg-emerald-50 hover:bg-white">
                      <h1 className="text-2xl text-center">
                        {villager.translations.kRko}
                      </h1>
                      <img
                        className="w-24"
                        src={villager.iconImage}
                        alt={villager.iconImage}
                      />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-wrap item-left justify-center gap-2 mt-10 mb-20">
          {filterVillagers().map((villager) => (
            <div className=" justify-center gap-2" key={villager.name}>
              <Link to={`/Vilager/${villager.name}`}>
                <div className="border hover:border-dotted bg-emerald-50 hover:bg-white">
                  <h1 className="text-2xl text-center">
                    {villager.translations.kRko}
                  </h1>
                  <img
                    className="w-24"
                    src={villager.iconImage}
                    alt={villager.iconImage}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Personality;
