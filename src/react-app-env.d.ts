/// <reference types="react-scripts" />

declare interface NHDetails {
  icon_url: string;
  house_exterior_url: string;
}

declare interface Villager {
  image_url: string;
  name: string;
  species: string;
  gender: string;
  personality: string;
  birthday_month: string;
  birthday_day: number;
  quote: string;
  nh_details: NHDetails;
}
