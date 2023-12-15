import { InMemoryCache } from "@apollo/client";

/**
 * Configuration for the Apollo Client cache with pagination support.
 *
 * @constant {InMemoryCache}
 */
export const cachePagination = new InMemoryCache({
  typePolicies: {
    Query: {
      /**
   * Fields policy for the 'pokemon_v2_pokemon' field.
   * @type {Object}
   */
      fields: {
        pokemon_v2_pokemon: {
          keyArgs: false,
          read(existing) {
            return existing;
          },
          /**
       * Custom merge function for the field.
       * @param {Array} existing - Existing cached data.
       * @param {Array} incoming - Incoming data to be merged.
       * @returns {Array} Merged data.
       */
          merge(existing = [], incoming = []) {
            return [...existing, ...incoming];
          },

        }
      }
    }
  }
});