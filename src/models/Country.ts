/**
 * Represents a country entity containing information such as its code, name, continent, currency, emoji, languages, native language, phone code, and states.
 */

import { Continent } from "./Continent";
import { Language } from "./Language";
import { State } from "./State";

export interface Country {
  code: string;
  name: string;
  continent?: Continent;
  currency?: string;
  emoji?: string;
  emojiU?: string;
  languages?: Language[];
  native?: string;
  phone?: string;
  states?: State[];
}
