import { villagers } from "animal-crossing";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonalityToKorean, SpeciesToKorean } from "../utils/AnimalKr";

const Vilger = () => {
  const [animal, setAnimal] = useState<VillagerType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    setIsLoading(false);
    const foundAnimal = villagers.find((villager) => villager.name === name);
    if (foundAnimal) {
      // 찾은 동물의 펄소널리티 값을 한국어로 변환하여 할당
      foundAnimal.personality = PersonalityToKorean(foundAnimal.personality);
      //
      foundAnimal.species = SpeciesToKorean(foundAnimal.species);
      setAnimal(foundAnimal);
      setIsLoading(true);
    }
  }, [name]);

  if (!animal) {
    return (
      <div className="text-4xl text-center my-10 flex justify-center ">
        <img
          className="w-28"
          src={process.env.PUBLIC_URL + "/images/두더지_배경삭제.png"}
          alt=""
        />
        <h1 className="p-6">"{name}" 이름을 가진 동물은 없어요 !</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{animal?.translations.kRko}</h1>
      <img src={animal.photoImage} alt="동물 주민 사진" />
      <h1>{animal.birthday}</h1>
      <h1>{animal.personality}</h1>
      <h1>{animal.species}</h1>
    </div>
  );
};

export default Vilger;
