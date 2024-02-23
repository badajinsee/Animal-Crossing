import axios from "axios";
import config from "../config";

import koreaAnimalName from "./Villagers.json";

interface animalName {
  name: string;
}

export const Animal = async () => {
  try {
    const response = await axios.get(
      "https://api.nookipedia.com/villagers?nhdetails=true ",
      {
        headers: {
          "X-API-KEY": config.X_API_KEY,
          "Accept-Version": "1.0.0",
        },
      }
    );
    // 원래 데이터와 일치하는 이름을 모두 가지고 있는 새 배열 생성
    const newData = response.data.reduce(
      (acc: animalName[], res: animalName) => {
        // JSON 파일에서 동물 이름이 일치하는 항목 찾기
        const matchedAnimal = koreaAnimalName.find(
          (animal) => animal.name === res.name
        );
        // 일치하는 항목이 있으면 새로운 객체를 배열에 추가
        if (matchedAnimal) {
          const newName = matchedAnimal.translations.kRko;
          acc.push({ ...res, name: newName });
        }
        return acc;
      },
      []
    );
    return newData;
  } catch (e) {
    console.error(e);
  }
};

export default Animal;
