import axios from "axios";
import config from "../config";

export const Animal = async () => {
  try {
    const response = await axios.get(
      "https://api.nookipedia.com/villagers?nhdetails=true ",
      {
        headers: {
          "X-API-KEY": config.X_API_KEY,
          "Accept-Version": "1.0.0",
        },
      }
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export default Animal;
