import { FC } from "react"
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonFooter, IonIcon, IonImg, IonItem, IonLabel, IonList, IonListHeader } from "@ionic/react";
import { PokemonV2Pokemon } from "../../Apollo/type";
import { colorType } from "../../utils/colortype";
import styles from './Card.module.css'

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
    const images = JSON.parse(pokemon_v2_pokemonsprites![0].sprites)

    return (
        <IonCard
            className={styles.cardContainer}
            style={{ background: `radial-gradient(circle, #fff, ${colorType[pokemon_v2_pokemontypes[0].pokemon_v2_type.name].color}` }} >
            <IonCardHeader
                className={styles.header}
                style={{ backgroundColor: colorType[pokemon_v2_pokemontypes[0].pokemon_v2_type.name].color }}
            >
                <IonCardSubtitle className={styles.subtitle}>{pokemon_v2_pokemontypes.map((item) => item.pokemon_v2_type.name).join(' - ')}</IonCardSubtitle>
                <IonCardTitle className={styles.title}>{name?.toLocaleUpperCase()}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className={styles.cardContent}>
                <IonImg
                    className={styles.image}
                    src={images.front_default}
                />
                <IonList className={styles.list} style={{ backgroundColor: colorType[pokemon_v2_pokemontypes[0].pokemon_v2_type.name].color }} >
                    <IonLabel className={styles.abilitiesLabel}>Abilities</IonLabel>
                    <IonList className={styles.abilities}>
                        {pokemon_v2_pokemonabilities?.map((item) => {
                            return (
                                <IonChip key={item.pokemon_v2_ability.id} className={styles.label}>{item.pokemon_v2_ability.name}</IonChip>
                            )
                        })}
                    </IonList>

                </IonList>
            </IonCardContent>
            <IonFooter style={{ backgroundColor: colorType[pokemon_v2_pokemontypes[0].pokemon_v2_type.name].color }} >
                <IonList className={styles.stadistics}>
                    <IonLabel className={styles.label} >{weight} kg</IonLabel>
                    <IonLabel className={styles.label} >{height} feet</IonLabel>
                    <IonLabel className={styles.label} >exp {base_experience}</IonLabel>
                </IonList>
            </IonFooter>
        </IonCard>
    );
};

export default Card