import { villagers } from "animal-crossing";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PersonalityToKorean, SpeciesToKorean } from "../utils/AnimalKr";
import { useRecoilState } from "recoil";
import { loadingState } from "../recoilState";
import { HashLoader } from "react-spinners";

const Vilger = () => {
  const [animal, setAnimal] = useState<VillagerType | null>(null);

  const { name } = useParams();

  // 로딩 가져오기
  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    async function fetchAndLoadAnimal() {
      setLoading(true); // 데이터 및 이미지 로딩 시작
      const foundAnimal = villagers.find((villager) => villager.name === name);

      if (foundAnimal) {
        // 찾은 동물 정보 처리
        let copyAnimal = { ...foundAnimal };
        copyAnimal.personality = PersonalityToKorean(copyAnimal.personality);
        copyAnimal.species = SpeciesToKorean(copyAnimal.species);

        // 이미지 로딩을 Promise로 처리
        const loadImage = new Promise((resolve, reject) => {
          // 새 이미지 객체 생성
          const img = new Image();
          // 생성 이미지 객체를 photoImage로 설정
          img.src = copyAnimal.photoImage;
          // 이미지 성공 로딩
          img.onload = resolve;
          // 이미지 로딩 오류발생
          img.onerror = reject;
        });

        try {
          await loadImage; // 이미지 로딩 기다림
          setAnimal(copyAnimal); // 이미지 로딩이 완료되면 동물 정보 설정
        } catch (error) {
          console.error("이미지 로딩 실패:", error);
        }
      }

      setLoading(false); // 전체 로딩 완료
    }

    fetchAndLoadAnimal();
  }, [name, setLoading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-64">
        <HashLoader color="#36d7b7" />
      </div>
    );
  } else if (animal) {
    return (
      <div className="flex justify-center items-center p-0 m-10 max-sm:text-sm  ">
        <div className="border-2 p-8 bg-emerald-50 max-sm:mb-20  ">
          <h1 className="text-3xl mb-2 hover:text-green-300">
            {animal?.translations.kRko}
          </h1>
          <img src={animal.photoImage} alt="동물 주민 사진" />
          <div className="flex-column px-20 text-lg py-4 max-sm:px-0 max-sm:ml-4">
            <div className="flex max-sm:text-sm">
              <h2 className="pr-2 text-green-600 ">생일:</h2>
              <h1 className="hover:text-green-300">{animal.birthday}</h1>
            </div>
            <div className="flex max-sm:text-sm">
              <h2 className="pr-2 text-green-600">성격:</h2>
              <h1 className="hover:text-green-300">{animal.personality}</h1>
            </div>
            <div className="flex max-sm:text-sm">
              <h2 className="pr-2 text-green-600">종류:</h2>
              <h1 className="hover:text-green-300">{animal.species}</h1>
            </div>
            <div className="flex max-sm:text-sm">
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
          className="w-28 max-sm:w-20 max-sm:h-20 max-sm:my-6 "
          src={process.env.PUBLIC_URL + "/images/두더지_배경삭제.png"}
          alt=""
        />
        <h1 className="p-6 max-sm:text-md">
          "{name}" 이름을 가진 동물은 없어요 !
        </h1>
      </div>
    );
  }
};

export default Vilger;
