import { FC } from "react"
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList } from "@ionic/react";
import { PokemonV2Pokemon } from "../../Apollo/type";


const Card: FC<PokemonV2Pokemon> = ({ name, base_experience, height, weight }) => {

    return (
        <IonCard color="primary">
            <IonCardHeader>
                <IonCardTitle>{name}</IonCardTitle>
                <IonCardSubtitle>{base_experience}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonList>
                    <IonItem>
                        <IonLabel>{height}</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>{weight}</IonLabel>
                    </IonItem>
                </IonList>
            </IonCardContent>
        </IonCard>
    );
};

export default Card