import { villagers } from "animal-crossing";

const Home = () => {
  const animal = villagers.map((villager) => villager);
  console.log(animal);
  return (
    <div>
      <h1 className="font-UhBeecharming text-2xl">homepage</h1>
      {animal.map((villager, index) => (
        <div key={index}>
          <h1>{villager.translations.kRko}</h1>
          <img src={villager.iconImage} alt={villager.iconImage} />
        </div>
      ))}
    </div>
  );
};

export default Home;
