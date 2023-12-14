export interface IData {
    pokemon_v2_pokemon: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemonability {
    pokemon_v2_ability: PokemonV2Ability;
}

export interface PokemonV2Ability {
    name: string;
    id: number;
}

export interface PokemonV2Pokemonsprite {
    sprites: string;
}

export interface PokemonV2Pokemon {
    name?: string;
    height?: number;
    base_experience?: number;
    weight?: number;
    id: number;
    pokemon_v2_pokemonabilities?: PokemonV2Pokemonability[];
    pokemon_v2_pokemonsprites?: PokemonV2Pokemonsprite[];
}

export interface ProviderProps {
    children: ReactNode;
};