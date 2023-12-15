/**
 * @file Home component for displaying a list of Pokémon cards.
 * @module Home
 */

import React, { useEffect } from 'react';
import {
  IonImg,
  IonPage,
  IonHeader,
  IonSpinner,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/react';
import Card from '../../components/Card/Card';
import { useData } from '../../Apollo/useData';
import { PokemonV2Pokemon } from '../../Apollo/type';
import './Home.css';

/**
 * Home functional component.
 *
 * @component
 * @return {JSX.Element} Home component
 */
const Home: React.FC = () => {
  /**
   * Custom hook to fetch Pokémon data.
   */
  const { loading, data, getPokemons, moreGetPokemons } = useData();

  /**
   * Effect hook to fetch Pokémon data on component mount.
   */
  useEffect(() => {
    getPokemons();
  }, []);

  /**
   * Render the Home component.
   *
   * @return {JSX.Element} Rendered Home component
   */
  return (
    <IonPage>
      <IonHeader>
        <IonImg src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg' />
      </IonHeader>
      <IonContent fullscreen>
        <div className='card-container'>
          {loading ? (
            <IonSpinner name="circles"></IonSpinner>
          ) : (
            <>
              {data?.pokemon_v2_pokemon.map((item: PokemonV2Pokemon) => (
                <Card key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
        <IonInfiniteScroll
          threshold='15%'
          position='bottom'
          onIonInfinite={async (ev) => {
            await moreGetPokemons();
            setTimeout(() => {
              ev.target.complete();
            }, 1000);
          }}
        >
          <IonInfiniteScrollContent
            loadingSpinner={'circles'}
            loadingText={'Loading more Pokemons'}
          ></IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
