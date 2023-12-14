import { IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';
import Card from '../../components/Card/Card';
import { useData } from '../../Apollo/useData';
import { useEffect } from 'react';
import { PokemonV2Pokemon } from '../../Apollo/type';

const Home: React.FC = () => {
  const { error, loading, data, getPokemons, moreGetPokemons } = useData()
  useEffect(() => {
    getPokemons()
  }, [])

  console.log(data);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>POKEMONS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonList>
          <IonItem>
            {loading
              ?
              <span>Loading...</span>
              :
              data?.pokemon_v2_pokemon.map((item: PokemonV2Pokemon) => {
                return (
                  <Card
                    key={item.id}
                    {...item}
                  />)
              })
            }
          </IonItem>
        </IonList>
        <IonInfiniteScroll
          threshold='15%'
          position='bottom'

          onIonInfinite={async (ev) => {
            await moreGetPokemons()
            setTimeout(() => {
              ev.target.complete()
            }, 1000)
          }}
        >
          <IonInfiniteScrollContent loadingSpinner={'circles'} loadingText={"Loading more Pokemons"}>
          </IonInfiniteScrollContent>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Home;
