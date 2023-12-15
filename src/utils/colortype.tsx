
interface PokemonType {
    name: string;
    color: string;    
  }

interface IColorType {
    [key: string]: PokemonType;
  }

export const colorType:IColorType = {
    bug: { name: 'Bug', color: '#A8B820' },
    dark: { name: 'Dark', color: '#705848' },
    dragon: { name: 'Dragon', color: '#7038F8' },
    electric: { name: 'Electric', color: '#F8D030' },
    fairy: { name: 'Fairy', color: '#EE99AC' },
    fighting: { name: 'Fighting', color: '#C03028' },
    fire: { name: 'Fire', color: '#F08030' },
    flying: { name: 'Flying', color: '#A890F0' },
    ghost: { name: 'Ghost', color: '#705898' },
    grass: { name: 'Grass', color: '#78C850' },
    ground: { name: 'Ground', color: '#E0C068' },
    ice: { name: 'Ice', color: '#98D8D8' },
    normal: { name: 'Normal', color: '#A8A878' },
    poison: { name: 'Poison', color: '#A040A0' },
    psychic: { name: 'Psychic', color: '#F85888' },
    rock: { name: 'Rock', color: '#B8A038' },
    steel: { name: 'Steel', color: '#B8B8D0' },
    water: { name: 'Water', color: '#6890F0' }
};