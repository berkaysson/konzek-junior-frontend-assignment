/**
 * Represents a continent entity containing information about its code, name, and an array of countries it contains.
 */

import { Country } from "./Country";

export interface Continent {
  code: string;
  countries: Country[];
  name: string;
}
