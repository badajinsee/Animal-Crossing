import { items } from "animal-crossing";
import { useParams } from "react-router-dom";

const FurnitureDetail = () => {
  const { itemname } = useParams<{ itemname: string }>();

  const itemName = decodeURIComponent(itemname ? itemname : "");

  const item = items.find((item) => item.name.trim() === itemName);

  // const catalog = items.map((item) => item.source);
  // const catalog = items
  //   .filter((item) => item.catalog === undefined)
  //   .map((item) => item.name);
  // const catalog2 = new Set(catalog);

  // console.log(catalog);

  // 카탈로그 번역
  const catalogKr: Record<string, string> = {
    Seasonal: "너굴쇼핑(시즌 아이템)",
    "For sale": "구매가능",
    "Not for sale": "비매품",
    null: "",
    undefined: "",
  };

  // 카탈로그 한국어 번역 함수
  function catalogToKorean(inputCatalog: string): string {
    if (!inputCatalog) return "";
    const koreanCatalog = catalogKr[inputCatalog];
    if (koreanCatalog) {
      return koreanCatalog;
    }
    return inputCatalog;
  }

  // 카탈로그 재정의?
  const krCatalog = () => {
    if (item?.catalog) {
      return catalogToKorean(item?.catalog);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-10">
        <div className="grid items-center justify-center mt-3 ">
          <h1 className="text-3xl ml-2 mt-5 ">{item?.translations?.kRko}</h1>
          <h2 className="text-sm ml-3 text-gray-400">{item?.name}</h2>
          {item?.image ? (
            <img
              style={{ width: "180px" }}
              className=""
              src={item?.image}
              alt=""
            />
          ) : item?.variations && item?.variations?.length > 0 ? (
            <img src={item?.variations[0].image} alt="" />
          ) : (
            <div>Not Image</div>
          )}
        </div>

        <div className="flex flex-col justify-center items-center text-lg rounded-lg border border-lime-400 p-5 mt-12">
          {item?.sourceSheet === "Housewares" ? (
            <div>
              <span>종류: 가구</span>
            </div>
          ) : (
            <div>
              <span>종류: 잡화</span>
            </div>
          )}

          {item?.buy === -1 ? (
            <span></span>
          ) : (
            <div className="flex items-center mr-6 ">
              <img
                className="w-12 ml-2"
                src={process.env.PUBLIC_URL + "/images/벨_배경삭제.png"}
                alt=""
              />
              <span>구입가: {item?.buy}벨</span>
            </div>
          )}

          {item?.catalog && <span>구매여부: {krCatalog()}</span>}

          <div>
            {item?.colors ? (
              <div>
                <span> 컬러: {item?.colors && item?.colors[0]},</span>
                <span> {item?.colors && item?.colors[1]}</span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      {/* 
      <div className="grid">
        {item?.variations ? (
          <div key={item.name}>
            {item.variations.map((variaition) => (
              <img src={variaition.image} alt="" />
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div> */}
    </>
  );
};

export default FurnitureDetail;
