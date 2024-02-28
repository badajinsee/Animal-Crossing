import { Personality } from "animal-crossing/lib/types/Villager";

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

// 주민 종류별 번역
// 어떤 문자열 키도 허용하되, 그 값은 문자열이어야 한다'는 뜻의 인덱스 시그니처
const speciesKr: { [key: string]: string } = {
  Bird: "새",
  Squirrel: "다람쥐",
  Pig: "돼지",
  Gorilla: "고릴라",
  Alligator: "악어",
  Koala: "코알라",
  Eagle: "독수리",
  Anteater: "개미핥기",
  Bull: "황소",
  Mouse: "쥐",
  Cat: "고양이",
  Horse: "말",
  Hamster: "햄스터",
  Kangaroo: "캥거루",
  Wolf: "늑대",
  Penguin: "펭귄",
  Chicken: "닭",
  Elephant: "코끼리",
  Rhinoceros: "코뿔소",
  Sheep: "양",
  Deer: "사슴",
  Tiger: "호랑이",
  "Bear cub": "아기곰",
  Dog: "개",
  Bear: "곰",
  Hippo: "하마",
  Duck: "오리",
  Goat: "염소",
  Ostrich: "타조",
  Rabbit: "토끼",
  Lion: "사자",
  Frog: "개구리",
  Octopus: "문어",
  Monkey: "원숭이",
  Cow: "소",
};

// 주민 성격 번역 함수
export function PersonalityToKorean(
  inputpersonality: Personality
): Personality {
  const koreanPersonality = personalityKr[inputpersonality];
  if (koreanPersonality) {
    return koreanPersonality as Personality;
  }
  return inputpersonality;
}

// 주민 종류 번역 함수
export function SpeciesToKorean(inputSpecies: string): string {
  const koeranSpecies = speciesKr[inputSpecies];
  if (koeranSpecies) {
    return koeranSpecies;
  }
  return inputSpecies;
}
