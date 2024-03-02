import { villagers } from "animal-crossing";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonalityToKorean, SpeciesToKorean } from "../utils/AnimalKr";

const Vilger = () => {
  const [animal, setAnimal] = useState<VillagerType | null>(null);

  const { name } = useParams();

  useEffect(() => {
    const foundAnimal = villagers.find((villager) => villager.name === name);
    if (foundAnimal) {
      // 찾은 동물의 펄소널리티 값을 한국어로 변환하여 할당
      let copyAnimal = { ...foundAnimal }; // foundAnimal 객체를 복사
      copyAnimal.personality = PersonalityToKorean(copyAnimal.personality);
      // 종별 한국어로 변환
      copyAnimal.species = SpeciesToKorean(copyAnimal.species);
      setAnimal(copyAnimal);
    }
  }, [name]);

  if (animal) {
    return (
      <div className="flex justify-center items-center p-0 m-10  ">
        <div className="border-2 p-8 bg-emerald-50  ">
          <h1 className="text-3xl mb-2 hover:text-green-300">
            {animal?.translations.kRko}
          </h1>
          <img src={animal.photoImage} alt="동물 주민 사진" />
          <div className="flex-column px-20 text-lg py-4">
            <div className="flex ">
              <h2 className="pr-2 text-green-600 ">생일:</h2>
              <h1 className="hover:text-green-300">{animal.birthday}</h1>
            </div>
            <div className="flex">
              <h2 className="pr-2 text-green-600">성격:</h2>
              <h1 className="hover:text-green-300">{animal.personality}</h1>
            </div>
            <div className="flex">
              <h2 className="pr-2 text-green-600">종류:</h2>
              <h1 className="hover:text-green-300">{animal.species}</h1>
            </div>
            <div className="flex">
              <h2 className="pr-2 text-green-600">말투:</h2>
              <h1 className="hover:text-green-300">
                "{animal.catchphrases.kRko}"
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
};

export default Vilger;
