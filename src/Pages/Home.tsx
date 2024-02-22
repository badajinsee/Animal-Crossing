import { useEffect, useState } from "react";
import { Animal } from "../utils/Animal";

const Home = () => {
  // 주민 정보 담긴 state
  const [vilger, setVilger] = useState<Villager[]>([]);

  // 주민 데이터 가져오기
  useEffect(() => {
    const getData = async () => {
      const data = await Animal();
      console.log(data);
      setVilger(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1 className="font-UhBeecharming text-2xl">homepage</h1>
      <h3>---</h3>
      {vilger &&
        vilger.map((item: Villager, index: number) => (
          <div key={index}>
            <img src={item.image_url} alt="" />
            <h1 className="text-2xl">{item.name}</h1>
            <h3 className="text-green">{item.species}</h3>
            <h3>{item.gender}</h3>
            <h3>{item.personality}</h3>
            <h3>{item.birthday_month}</h3>
            <h3>{item.birthday_day}</h3>
            <h3>{item.quote}</h3>
            {item.nh_details && (
              <img src={item.nh_details.icon_url} alt="아이콘" />
            )}
            {item.nh_details && (
              <img src={item.nh_details.house_exterior_url} alt="아이콘" />
            )}
            <div>---</div>
          </div>
        ))}
    </div>
  );
};

export default Home;
