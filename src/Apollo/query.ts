import { gql } from 'graphql-tag'


export const GET_POKEMONS = gql`
  query samplePokeAPIquery($offset: Int!) {
    pokemon_v2_pokemon(limit: 10, order_by: {id: asc}, offset: $offset) {
      name
      height
      base_experience
      weight
      id
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
          id
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  } 
`;
