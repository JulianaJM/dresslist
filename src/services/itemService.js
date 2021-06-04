/* eslint-disable import/prefer-default-export */
import { ADD_ITEM } from "../gql/itemQueries";

export const addItem = (client, inputItem) =>
  client.mutate("addItem", ADD_ITEM, inputItem).then(data => data);
