import { items } from "animal-crossing";
import { useParams } from "react-router-dom";

const FurnitureDetail = () => {
  const { itemname } = useParams<{ itemname: string }>();

  const itemName = decodeURIComponent(itemname ? itemname : "");

  const item = items.find((item) => item.name.trim() === itemName);

  // const catalog = items.map((item) => item.catalog);
  // const catalog = items
  //   .filter((item) => item.catalog === undefined)
  //   .map((item) => item.name);
  // const catalog2 = new Set(catalog);
  // console.log(catalog2);

  // 카탈로그 번역
  const catalogKr: Record<string, string> = {
    Seasonal: "시즌 아이템",
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
    <div className="flex flex-col justify-center items-center  ">
      <h1 className="text-3xl mt-2">{item?.translations?.kRko}</h1>
      <img style={{ width: "200px" }} className="" src={item?.image} alt="" />
      <div className="flex flex-col justify-center items-center text-lg rounded-lg border p-5">
        {item?.buy === -1 ? (
          <span></span>
        ) : (
          <div className="flex items-center ">
            <img
              className="w-12"
              src={process.env.PUBLIC_URL + "/images/벨_배경삭제.png"}
              alt=""
            />
            <span>가격: {item?.buy}벨</span>
          </div>
        )}
        {item?.catalog && <span>수집 방법: {krCatalog()}</span>}
      </div>
    </div>
  );
};

export default FurnitureDetail;
