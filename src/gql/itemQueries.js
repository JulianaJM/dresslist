/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";

export const ADD_ITEM = gql`
  mutation addItem($type: String!, $category: String!, $color: String!, $pantLength: String) {
    addItem(type: $type, category: $category, color: $color, pantLength: $pantLength) {
      items {
        category {
          name
        }
        type {
          name
        }
        color {
          name
        }
        pantLength {
          length
        }
        size {
          length
        }
        file
      }
    }
  }
`;
