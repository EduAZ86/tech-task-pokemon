import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "../Apollo/query";
import { useEffect, useState } from "react";

/**
* Custom hook for fetching Pokémon data using Apollo Client.
*
* @function
* @returns {Object} Object containing data, loading, error, and functions for fetching more Pokémon data.
*/
export const useData = () => {
  const ALLPOKEMONS = 10275;
  const RANGE = 10;
  // Map to store offsets for random Pokémon fetching.
  const [mapOffsets, setMapOffsets] = useState<Map<number, number> | null>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  /**
  * Apollo Client hook for lazy loading Pokémon data.
  */
  const [loadPokemons, { data, error, loading, fetchMore }] = useLazyQuery(GET_POKEMONS);

  useEffect(() => {
    if (mapOffsets === null) {
      const initialMapOffsets = new Map()
      for (let i = 0; i < Math.round(ALLPOKEMONS / RANGE); i += 10) {
        initialMapOffsets.set(i / 10, i);
      };
      setMapOffsets(initialMapOffsets)
      randomOffset()
    }
  }, [])

  /**
  * Function to set a random offset from available offsets.
  */
  const randomOffset = () => {
    let randomPosition = 0
    if (mapOffsets) {
      const randomIndex = Math.floor(Math.random() * mapOffsets.size);
      randomPosition = [...mapOffsets.keys()][randomIndex];
      setCurrentOffset(mapOffsets.get(randomPosition)!);
      mapOffsets.delete(randomPosition);

    } else {
      randomPosition = (Math.floor(Math.random() * (ALLPOKEMONS / RANGE) / 10))
      setCurrentOffset(randomPosition);
    }
  };
  /**
   * Function to fetch more Pokémon data with a new random offset.
   */
  const moreGetPokemons = () => {
    randomOffset()
    fetchMore({ variables: { offset: currentOffset } })
  }
  /**
  * Function to fetch Pokémon data with a random offset.
  */
  const getPokemons = () => {
    randomOffset()
    loadPokemons({ variables: { offset: (Math.floor(Math.random() * (ALLPOKEMONS / RANGE) / 10)) } })
  }
  return { error, loading, data, getPokemons, moreGetPokemons };
};
