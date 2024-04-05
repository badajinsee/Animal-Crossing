import { items } from "animal-crossing";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingState } from "../recoilState";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

// 잡화
const Miscellaneous = () => {
  // 잡화 불러오기
  const generalMerchandise = items.filter(
    (f) => f.sourceSheet === "Miscellaneous"
  );

  // 로딩 가져오기
  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [setLoading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-64">
        <HashLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center ">
      {generalMerchandise.map((item) => {
        if (item.image) {
          return (
            <Link
              to={`/FurnitureDetail/${encodeURIComponent(item.name)}`}
              key={item.name}
              className="flex-row flex-wrap justify-center gap-4 text-xl w-46 h-42 overflow-hidden whitespace-normal  m-6  rounded-lg border-2 hover:border-dotted border-green-300 p-3 bg-neutral-100 hover:bg-white  "
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
              <img className="m-auto" src={item.image} alt="이미지" />
            </Link>
          );
        } else {
          return (
            <Link
              to={`/FurnitureDetail/${encodeURIComponent(item.name)}`}
              key={item.name}
              className="flex-row flex-wrap justify-center gap-4 text-xl w-46 h-42 overflow-hidden whitespace-normal  m-6  rounded-lg border-2 hover:border-dotted border-green-300 p-3  bg-neutral-100 hover:bg-white "
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
                alt="이미지"
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Miscellaneous;
