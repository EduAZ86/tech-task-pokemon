import { InMemoryCache } from "@apollo/client";
import { IData } from './type'

export const cachePagination = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemon_v2_pokemon: {
          keyArgs: false,
          read(existing) {
            return existing;
          },
          merge(existing = [], incoming = []) {
            return [...existing, ...incoming];
          },

        }
      }
    }
  }
})