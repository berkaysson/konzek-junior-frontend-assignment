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
