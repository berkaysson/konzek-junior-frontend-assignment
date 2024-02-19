/**
 * GraphQL query to fetch the list of countries from the public GraphQL API.
 * It retrieves various information about each country, including its code, name,
 * continent, currency, emoji, languages, native name, phone code, and states (if applicable).
 */

import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      continent {
        code
        name
      }
      currency
      emoji
      emojiU
      languages {
        code
        name
        native
        rtl
      }
      native
      phone
      states {
        code
        name
      }
    }
  }
`;
