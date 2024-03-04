import { useState } from "react";

import Housewares from "../Components/Housewares";
import Miscellaneous from "../Components/Miscellaneous";

const Furniture = () => {
  // 잡화
  // const furniture = items.filter((f) => f.sourceSheet === "Miscellaneous");
  // const furniture2 = furniture.map((f) => f.translations?.kRko);
  // 가구
  // const furniture3 = items.filter((f) => f.sourceSheet === "Housewares");
  // const furniture4 = furniture3.map((f) => f.translations?.kRko);

  const [sortType, setSortType] = useState("true");

  return (
    <div>
      <select
        defaultValue={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="true">잡화</option>
        <option value="false">가구</option>
      </select>
      {sortType === "true" ? <Miscellaneous /> : <Housewares />}
    </div>
  );
};

export default Furniture;
