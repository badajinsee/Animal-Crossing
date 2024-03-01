import Species from "../Components/Species";
import { villagers } from "animal-crossing";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputKoreanName = e.target.value;
    setInputValue(inputKoreanName);
  };

  const onSearchClick = () => {
    if (inputValue === "") {
      alert("동물을 입력하세요 !");
      navigate("");
      return;
    }
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

      <div className="flex justify-end mr-20 max-sm:justify-center max-sm:mr-0">
        <form className="max-w-sm mb-3 w-56 ">
          <label
            id="countries"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            동물 정렬 옵션을 선택하세요
          </label>
          <select className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 ">
            <option selected>동물 종</option>
            <option>동물 성격</option>
          </select>
        </form>
      </div>
      <Species />
    </div>
  );
};

export default Home;
