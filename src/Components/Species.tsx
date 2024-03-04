import { Link } from "react-router-dom";
import { SpeciesToKorean } from "../utils/AnimalKr";
import { villagers } from "animal-crossing";

const Species = () => {
  // 주민 종류 불러오기
  const animalSpecies = [...new Set(villagers.map((v) => v.species))];

  // 주민 종류 한글로 번역
  const speciesTitle = animalSpecies.map((animalS) => {
    animalS = SpeciesToKorean(animalS);
    return animalS;
  });

  return (
    <div>
      {animalSpecies.map((species, index) => (
        <div className="mb-20" key={species}>
          <div className="flex justify-center mb-7 text-3xl">
            <h2>{speciesTitle[index]}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 ">
            {villagers
              .filter((villager) => villager.species === species)
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

export default Species;
