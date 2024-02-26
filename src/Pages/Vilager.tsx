import { villagers } from "animal-crossing";
import { Personality } from "animal-crossing/lib/types/Villager";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Vilger = () => {
  const [animal, setAnimal] = useState<VillagerType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();

  // 주민 성격별 번역
  const personalityKr = {
    Jock: "운동광",
    Cranky: "무뚝뚝",
    Peppy: "아이돌",
    "Big Sister": "단순활발",
    Lazy: "먹보",
    Normal: "친절함",
    Snooty: "성숙함",
    Smug: "느끼함",
  };

  // 주민 성격 번역 함수
  function PersonalityToKorean(inputpersonality: Personality): Personality {
    const koreanPersonality = personalityKr[inputpersonality];
    if (koreanPersonality) {
      return koreanPersonality as Personality;
    }
    return inputpersonality;
  }

  useEffect(() => {
    setIsLoading(false);
    const foundAnimal = villagers.find((villager) => villager.name === name);
    if (foundAnimal) {
      // 찾은 동물의 펄소널리티 값을 한국어로 변환하여 할당
      foundAnimal.personality = PersonalityToKorean(foundAnimal.personality);
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
