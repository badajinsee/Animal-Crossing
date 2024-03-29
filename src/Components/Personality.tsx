import { villagers } from "animal-crossing";
import { PersonalityToKorean } from "../utils/AnimalKr";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Personality = () => {
  const [personalitySelected, setPersonalitySelected] = useState("Jock");

  // 주민성향 불러오기
  const animalPersonality = [...new Set(villagers.map((p) => p.personality))];

  //주민 성향 한국어 번역
  const PersonalityTitle = animalPersonality.map((animalP) => {
    animalP = PersonalityToKorean(animalP);
    return animalP;
  });

  //
  const personalityOption = [
    { value: "Jock", name: "운동광" },
    { value: "Cranky", name: "무뚝뚝" },
    { value: "Peppy", name: "아이돌" },
    { value: "Big Sister", name: "단순활발" },
    { value: "Lazy", name: "먹보" },
    { value: "Normal", name: "친절함" },
    { value: "Snooty", name: "느끼함" },
  ];

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPersonalitySelected(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSelect} value={personalitySelected}>
        {personalityOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      {animalPersonality.map((personality, index) => (
        <div className="mb-20" key={personality}>
          <div className="flex justify-center mb-7 text-3xl">
            <h2>{PersonalityTitle[index]}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {villagers
              .filter((villager) => villager.personality === personality)
              .map((villager) => (
                <Link to={`/Vilager/${villager.name}`} key={villager.name}>
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
      ))}
    </div>
  );
};

export default Personality;
