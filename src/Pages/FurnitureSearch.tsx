import { Link, useLocation } from "react-router-dom";

const FurnitureSearch = () => {
  const location = useLocation();

  // location.state가 undefined인 경우를 대비하여 기본값을 설정
  const state = location.state || {};

  // 매치 아이템
  const matchedItems = state.matchItem || [];

  // 입력한 값
  const inputValue = state.inputValue;

  return (
    <>
      <h1 className="text-2xl border-b-2 my-6 pb-2">
        검색한 "{inputValue}" 입니다.
      </h1>
      <div className="flex flex-wrap gap-3 justify-center ">
        {matchedItems.map(
          (item: {
            eng: string;
            ko: string;
            imageUrl: string;
            variationsImg?: string;
          }) => {
            const displayImage = item.imageUrl || item.variationsImg;
            if (displayImage) {
              return (
                <div className=" bg-amber-100 hover:bg-white rounded-lg border-2 border-yellow-300 hover:border-dotted">
                  <Link to={`/FurnitureDetail/${encodeURIComponent(item.eng)}`}>
                    <div className="items-center  w-46 h-42" key={item.eng}>
                      <h1
                        className={`text-center ${
                          item.ko.length > 9
                            ? "text-sm items-center my-1 "
                            : "text-xl"
                        }`}
                      >
                        {item.ko}
                      </h1>
                      <img
                        className="m-auto"
                        src={displayImage}
                        alt={item.ko}
                      />
                    </div>
                  </Link>
                </div>
              );
            } else {
              return <div>"알맞은 이미지를 찾을수가 없습니다."</div>;
            }
          }
        )}
      </div>
    </>
  );
};

export default FurnitureSearch;
