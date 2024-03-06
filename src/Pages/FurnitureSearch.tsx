import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const FurnitureSearch = () => {
  const location = useLocation();

  // location.state가 undefined인 경우를 대비하여 기본값을 설정합니다.
  const state = location.state || {};

  const matchedItems = state.matchItem || [];

  const inputValue = state.inputValue;

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <h1>검색한 "{inputValue}" 입니다</h1>
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
              <Link to={`/FurnitureDetail/${encodeURIComponent(item.eng)}`}>
                <div key={item.eng}>
                  <div>{item.ko}</div>
                  <img src={displayImage} alt={item.ko} />
                </div>
              </Link>
            );
          }
        }
      )}
    </>
  );
};

export default FurnitureSearch;
