import { villagers } from "animal-crossing";
import { PersonalityToKorean } from "../utils/AnimalKr";
import { Link } from "react-router-dom";

const Personality = () => {
  const animalPersonality = [...new Set(villagers.map((p) => p.personality))];

  const PersonalityTitle = animalPersonality.map((animalP) => {
    animalP = PersonalityToKorean(animalP);
    return animalP;
  });

  return (
    <div>
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
                  <div className="border bg-emerald-50">
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
