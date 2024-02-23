import { villagers, IVillager } from "animal-crossing";

const Animal = () => {
  const freya = villagers.find((villager) => villager.name === "Freya");
  if (freya) {
    console.log(freya.translations.uSes);
  }
  return <div></div>;
};

export default Animal;
