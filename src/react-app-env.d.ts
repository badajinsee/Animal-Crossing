/// <reference types="react-scripts" />

declare interface VillagerType {
  name: string;
  species: string;
  personality: Personality;
  birthday: string;
  translations: {
    kRko: string;
  };
  photoImage: string;
  iconImage: string;
  houseImage: string | null;
  catchphrases: {
    kRko: string;
  };
}
