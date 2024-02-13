import { Country } from "./Country";

export interface Continent {
  code: string;
  countries: Country[];
  name: string;
}