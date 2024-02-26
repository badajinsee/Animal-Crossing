import { villagers } from "animal-crossing";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // 주민 불러오기
  const animal = villagers.map((villager) => villager);

  // 주민 이름 불러오기 (Input)
  const animalName = villagers.map((villager) => ({
    eng: villager.name,
    ko: villager.translations.kRko,
  }));

  // 주민 종류 불러오기
  // const animlalSpecies = [...new Set(villagers.map((v) => v.species))];
  // console.log(animlalSpecies);

  // input에 입력한 값 저장 | 사용자 입력 상태 저장
  const [inputValue, setInputValue] = useState("");

  // 네비게이트 | 동물 상세페이지 이동
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputKoreanName = e.target.value;
    setInputValue(inputKoreanName);
  };

  const onSearchClick = () => {
    const matchAnimal = animalName.find((animal) => animal.ko === inputValue);
    if (matchAnimal) {
      navigate(`/Vilager/${matchAnimal.eng}`);
    } else {
      navigate(`/Vilager/${inputValue}`);
    }
  };
  return (
    <div>
      <form className="max-w-md mx-auto m-10" onSubmit={handleSubmit}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              {/* <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              /> */}
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

      <div className="flex flex-wrap justify-center gap-2 items-center">
        {animal.map((villager, index) => (
          <Link key={index} to={`/Vilager/${villager.name}`}>
            <div className="border" key={index}>
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
  );
};

export default Home;
