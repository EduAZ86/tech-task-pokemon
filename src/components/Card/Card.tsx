import { FC } from "react"
import {
    IonImg,
    IonChip,
    IonCard,
    IonList,
    IonLabel,
    IonFooter,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
} from "@ionic/react";
import { PokemonV2Pokemon } from "../../Apollo/type";
import { colorType } from "../../utils/colortype";
import './Card.css'

/**
 * React Functional Component for displaying a Pokémon card.
 *
 * @component
 * @param {Object} props - The properties of the Pokémon card.
 * @param {string} props.name - The name of the Pokémon.
 * @param {number} props.weight - The weight of the Pokémon.
 * @param {number} props.height - The height of the Pokémon.
 * @param {number} props.base_experience - The base experience of the Pokémon.
 * @param {Array<PokemonV2Pokemontype>} props.pokemon_v2_pokemontypes - The types of the Pokémon.
 * @param {Array<PokemonV2Pokemonsprite>} props.pokemon_v2_pokemonsprites - The sprites of the Pokémon.
 * @param {Array<PokemonV2Pokemonability>} props.pokemon_v2_pokemonabilities - The abilities of the Pokémon.
 * @returns {JSX.Element} Pokémon card component.
 */
const Card: FC<PokemonV2Pokemon> = ({
    name,
    weight,
    height,
    base_experience,
    pokemon_v2_pokemontypes,
    pokemon_v2_pokemonsprites,
    pokemon_v2_pokemonabilities
}) => {
    console.log('sprites', pokemon_v2_pokemonsprites && JSON.parse(pokemon_v2_pokemonsprites[0].sprites));
    const images = JSON.parse(pokemon_v2_pokemonsprites![0].sprites);

    /**
     * Render the Pokémon card component.
     *
     * @return {JSX.Element} Rendered Pokémon card.
     */
    return (
        <IonCard style={{ background: `radial-gradient(circle, #fff, ${colorType[pokemon_v2_pokemontypes[0].pokemon_v2_type.name].color}` }} >
            <IonCardHeader style={{ backgroundColor: colorType[pokemon_v2_pokemontypes[0].pokemon_v2_type.name].color }}>
                <IonCardSubtitle>{pokemon_v2_pokemontypes.map((item) => item.pokemon_v2_type.name).join(' - ')}</IonCardSubtitle>
                <IonCardTitle>{name?.toLocaleUpperCase()}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonImg
                    className='image'
                    src={images.front_default}
                />
                <div style={{ backgroundColor: colorType[pokemon_v2_pokemontypes[0].pokemon_v2_type.name].color, borderRadius: '10px', padding: '5px' }} >
                    <IonLabel className='abilitiesLabel'>Abilities</IonLabel>
                    <IonList className='styles.abilities'>
                        {pokemon_v2_pokemonabilities?.map((item) => (
                            <IonChip key={item.pokemon_v2_ability.id} >{item.pokemon_v2_ability.name}</IonChip>
                        ))}
                    </IonList>
                </div>
            </IonCardContent>
            <IonFooter style={{ backgroundColor: colorType[pokemon_v2_pokemontypes[0].pokemon_v2_type.name].color }} >
                <IonList>
                    <IonLabel>{weight} kg</IonLabel>
                    <IonLabel>{height} feet</IonLabel>
                    <IonLabel>exp {base_experience}</IonLabel>
                </IonList>
            </IonFooter>
        </IonCard>
    );
};

export default Card;
