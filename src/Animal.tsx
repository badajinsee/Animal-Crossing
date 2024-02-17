import config from "./config";

const Animal = () => {
  fetch("https://api.nookipedia.com/villagers", {
    headers: {
      "X-API-KEY": config.X_API_KEY,
      "Accept-Version": "1.0.0",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return <div></div>;
};

export default Animal;
