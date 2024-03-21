import { recipes } from "animal-crossing";

const Flower = () => {
  const recipe = recipes.map((item) => {
    return item.name;
  });
  console.log(recipe);
  return <div></div>;
};

export default Flower;
