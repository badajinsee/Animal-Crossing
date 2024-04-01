import { Link } from "react-router-dom";
import { SpeciesToKorean } from "../utils/AnimalKr";
import { villagers } from "animal-crossing";
import { useState } from "react";

const Species = () => {
  // 주민 종류 불러오기
  const animalSpecies = [...new Set(villagers.map((v) => v.species))];

  // 주민 종류 selected
  const [speciesSelected, setSpeciesSelected] = useState("All");

  // 주민 종류 한글로 번역
  const speciesTitle = animalSpecies.map((animalS) => {
    animalS = SpeciesToKorean(animalS);
    return animalS;
  });

  // 종류별 option
  const speciesOption = [
    { value: "All", name: "전체" },
    { value: "Bird", name: "새" },
    { value: "Squirrel", name: "다람쥐" },
    { value: "Pig", name: "돼지" },
    { value: "Gorilla", name: "고릴라" },
    { value: "Alligator", name: "악어" },
    { value: "Koala", name: "코알라" },
    { value: "Eagle", name: "독수리" },
    { value: "Anteater", name: "개미핥기" },
    { value: "Bull", name: "황소" },
    { value: "Mouse", name: "쥐" },
    { value: "Cat", name: "고양이" },
    { value: "Horse", name: "말" },
    { value: "Hamster", name: "햄스터" },
    { value: "Kangaroo", name: "캥거루" },
    { value: "Wolf", name: "늑대" },
    { value: "Penguin", name: "펭귄" },
    { value: "Chicken", name: "닭" },
    { value: "Elephant", name: "코끼리" },
    { value: "Rhinoceros", name: "코뿔소" },
    { value: "Sheep", name: "양" },
    { value: "Deer", name: "사슴" },
    { value: "Tiger", name: "호랑이" },
    { value: "Bear cub", name: "아기곰" },
    { value: "Dog", name: "개" },
    { value: "Bear", name: "곰" },
    { value: "Hippo", name: "하마" },
    { value: "Duck", name: "오리" },
    { value: "Goat", name: "염소" },
    { value: "Ostrich", name: "타조" },
    { value: "Rabbit", name: "토끼" },
    { value: "Lion", name: "사자" },
    { value: "Frog", name: "개구리" },
    { value: "Octopus", name: "문어" },
    { value: "Monkey", name: "원숭이" },
    { value: "Cow", name: "소" },
  ];

  // 동물 종별 onchange handle
  const handleSpeciesSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSpeciesSelected(e.target.value);
  };

  // 종 별 필터링 함수
  const filterSpecies = () => {
    if (speciesSelected === "All") {
      return villagers;
    }
    return villagers.filter((villager) => villager.species === speciesSelected);
  };

  return (
    <div>
      <div className="flex flex-col  justify-end mb-10 text-center">
        <span className="mb-2 text-2md">동물 종을 골라보세요!</span>
        <select
          className="text-center text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleSpeciesSelect}
          value={speciesSelected}
        >
          {speciesOption.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {speciesSelected === "All" ? (
        animalSpecies.map((species, index) => (
          <div className="mb-20" key={species}>
            <div className="flex justify-center mb-7 text-3xl">
              <h2 className="text-green-700 underline">
                {speciesTitle[index]}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 ">
              {villagers
                .filter((villager) => villager.species === species)
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
          {filterSpecies().map((villager) => (
            <div>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Species;
