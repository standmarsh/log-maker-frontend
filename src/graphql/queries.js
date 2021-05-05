import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    getCurrentUser {
      id
      fullname
      email
      role
    }
  }
`;
