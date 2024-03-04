import { useState } from "react";

import Housewares from "../Components/Housewares";
import Miscellaneous from "../Components/Miscellaneous";
import { useNavigate } from "react-router-dom";
import { items } from "animal-crossing";

const Furniture = () => {
  // 페이지 이동 (가구, 잡화)
  const [sortType, setSortType] = useState("true");

  // 입력한 가구로 이동
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputKoreaItemName = e.target.value;
    setInputValue(inputKoreaItemName);
  };

  const itemName = items.map((item) => ({
    eng: item.name,
    ko: item.translations?.kRko,
  }));

  const onSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue === "") {
      alert("가구/잡화를 입력하세요 !");
      return;
    }
    const matchItem = itemName.find((item) => item.ko === inputValue);
    if (matchItem) {
      navigate(`/FurnitureDetail/${matchItem.eng}`);
    } else {
      navigate(`/FurnitureDetail/${inputValue}`);
    }
  };

  return (
    <div>
      <form className=" mx-auto my-6 max-w-md  " onSubmit={onSearchClick}>
        <div className="flex">
          <select
            defaultValue={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border rounded-l-lg  border-gray-300 bg-gray-100 focus:ring-green-300 hover:border-green-400"
          >
            <option value="true">가구</option>
            <option value="false">잡화</option>
          </select>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-s-gray-50 border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-green-500"
              placeholder="가구와 잡화를 검색하세요."
              required
              value={inputValue}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-headerColor rounded-e-lg border  hover:bg-menuColor focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <svg
                className="w-4 h-4"
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
              {/* <span className="sr-only">Search</span> */}
            </button>
          </div>
        </div>
      </form>

      {sortType === "false" ? <Miscellaneous /> : <Housewares />}
    </div>
  );
};

export default Furniture;
