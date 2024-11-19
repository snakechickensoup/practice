import { gql } from "@apollo/client";

export const CHARACTERS_QUERY = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
