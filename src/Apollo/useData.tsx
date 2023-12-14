import { useLazyQuery } from "@apollo/client";
import { GET_POKEMONS } from "../Apollo/query";
import { useEffect, useState } from "react";

export const useData = () => {
  const ALLPOKEMONS = 10275;
  const RANGE = 10;
  const [mapOffsets, setMapOffsets] = useState<Map<number, number> | null>(null);
  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [loadPokemons, { data, error, loading, refetch, fetchMore }] = useLazyQuery(GET_POKEMONS);

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


  // Get random position


  const moreGetPokemons = () => {
    randomOffset()
    fetchMore({ variables: { offset: currentOffset } })
  }

  const getPokemons = () => {
    randomOffset()
    loadPokemons({ variables: { offset: currentOffset } })
  }

  return { error, loading, data, getPokemons, moreGetPokemons };
};
