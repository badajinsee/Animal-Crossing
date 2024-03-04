import { items } from "animal-crossing";
import { useParams } from "react-router-dom";

const FurnitureDetail = () => {
  const { itemname } = useParams<{ itemname: string }>();

  const itemName = decodeURIComponent(itemname ? itemname : "");

  const item = items.find((item) => item.name.trim() === itemName);

  return (
    <div>
      <div>{item?.translations?.kRko}</div>
      <img src={item?.image} alt="" />
      <div>{item?.buy}벨</div>
    </div>
  );
};

export default FurnitureDetail;
