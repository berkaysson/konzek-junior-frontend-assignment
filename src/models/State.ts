/**
 * Represents a state or province within a country.
 */

import { Country } from "./Country";

export interface State {
  code: string;
  country: Country;
  name: string;
}
