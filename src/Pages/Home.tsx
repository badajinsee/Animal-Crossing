import Species from "../Components/Species";
import Personality from "../Components/Personality";

import { villagers } from "animal-crossing";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // input에 입력한 값 저장 | 사용자 입력 상태 저장
  const [inputValue, setInputValue] = useState("");

  // 주민 이름 불러오기 (Input)
  const animalName = villagers.map((villager) => ({
    eng: villager.name,
    ko: villager.translations.kRko,
  }));

  // 네비게이트 | 동물 상세페이지 이동
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputKoreanName = e.target.value;
    setInputValue(inputKoreanName);
  };

  const onSearchClick = () => {
    if (inputValue === "") {
      alert("동물을 입력하세요 !");
      return;
    }

    const matchAnimal = animalName.find((animal) => animal.ko === inputValue);
    if (matchAnimal) {
      navigate(`/Villager/${matchAnimal.eng}`);
    } else {
      navigate(`/Villager/${inputValue}`);
    }
  };

  // select 요소
  const [sortType, setSortType] = useState("true");

  // 주민 생일
  const [birthdayVillager, setBirthVillager] = useState<VillagerType[] | null>(
    null
  );

  useEffect(() => {
    // 현재 날짜
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    // 오늘 생일인 동물 찾기
    const villager = villagers.filter((villager) => {
      const [birthMonth, birthDate] = villager.birthday.split("/").map(Number);
      return birthMonth === month && birthDate === date;
    });
    setBirthVillager(villager.length ? villager : []);
  }, []);

  return (
    <div>
      <form className="max-w-md mx-auto m-10">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="동물을 검색해주세요."
            required
            value={inputValue}
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={onSearchClick}
            className="text-white absolute end-2.5 bottom-2.5 bg-headerColor hover:bg-menuColor focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-headerColor dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            검색
          </button>
        </div>
      </form>

      <div className="rounded-xl border my-3 max-w-sm mx-auto bg-green-600">
        {birthdayVillager &&
          birthdayVillager.map((villager, index) => (
            <Link
              to={`Villager/${villager.name}`}
              className="flex items-center justify-center w-full py-1"
              key={index}
            >
              <img
                className="w-16 max-sm:w-12"
                src={villager.iconImage}
                alt={villager.translations.kRko}
              />
              <p className="text-2xl text-white max-sm:text-sm">
                오늘은 {villager.translations.kRko}의 생일이에요!
              </p>
            </Link>
          ))}
      </div>

      <div className="border-b-4"></div>

      <div className="flex justify-end mr-20 max-sm:justify-center max-sm:mr-0 mt-3">
        <form className="max-w-sm mb-3 w-56 ">
          <label
            id="countries"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            동물 정렬 옵션을 선택하세요
          </label>
          <select
            defaultValue={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "
          >
            <option value="true">동물 종</option>
            <option value="false">동물 성격</option>
          </select>
        </form>
      </div>

      {sortType === "true" ? <Species /> : <Personality />}
    </div>
  );
};

export default Home;
