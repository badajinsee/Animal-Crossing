import { items } from "animal-crossing";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingState } from "../recoilState";

// 가구
const Housewares = () => {
  // 가구 불러오기
  const generalFurniture = items.filter((f) => f.sourceSheet === "Housewares");

  // 로딩 가져오기
  const [loading, setLoading] = useRecoilState(loadingState);

  return (
    <div className="flex flex-wrap justify-center ">
      {generalFurniture.map((item) => {
        if (item.image) {
          return (
            <Link
              to={`/FurnitureDetail/${encodeURIComponent(item.name.trim())}`}
              key={item.name}
              className="flex-row flex-wrap justify-center gap-4 text-xl w-42 h-42 overflow-hidden whitespace-normal  m-6  rounded-lg border-2 hover:border-dotted border-green-300 p-3 bg-neutral-100 hover:bg-white  "
            >
              <h1
                className={`text-center ${
                  item.translations?.kRko && item.translations?.kRko.length > 9
                    ? "text-sm items-center my-1"
                    : "text-xl"
                }`}
              >
                {item.translations?.kRko}
              </h1>
              <img className="m-auto" src={item.image} alt="" />
            </Link>
          );
        } else {
          return (
            <Link
              to={`/FurnitureDetail/${item.name}`}
              key={item.name}
              className="flex-row flex-wrap justify-center gap-4 text-xl w-42 h-42 overflow-hidden whitespace-normal  m-6  rounded-lg border-2 hover:border-dotted border-green-300 p-3  bg-neutral-100 hover:bg-white "
            >
              <h1
                className={`text-center ${
                  item.translations?.kRko && item.translations?.kRko.length > 9
                    ? "text-sm items-center my-1"
                    : "text-xl"
                }`}
              >
                {item.translations?.kRko}
              </h1>
              <img
                className="m-auto"
                src={item.variations?.[0]?.image}
                alt=""
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Housewares;
