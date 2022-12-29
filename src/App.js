/* eslint-disable array-callback-return */
import './App.css';
import Header from './Componets/Header/Header';
import CardBlock from './Componets/CardComponent/CardBlock';
import Filter from './Componets/Filter/Filter';
import { useEffect, useState } from 'react';
import { getHeroes } from './ConnectApi/getHeroes';
import ErrorMessage from './Componets/ErrorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setHeroesRickyMorty, setErrorStatus } from './store/actions/index.js';

function App() {
   const [checkedFavorites, isCheckedFavorites] = useState(false);
   const errorStatus = useSelector(
      (state) => state.reducerRickMorty.selectedError,
   );
   const dispatch = useDispatch();

   const getHeroesArray = async () => {
      try {
         const result = await getHeroes();
         const heroes = modifySourceHeroes(result);
         dispatch(setHeroesRickyMorty(heroes));
      } catch (error) {
         console.log(error);
         dispatch(setErrorStatus());
      }
   };

   useEffect(() => {
      getHeroesArray();
   }, []);

   function modifySourceHeroes(data) {
      const heroes = data.results.map((hero) => {
         return {
            image: hero.image,
            name: hero.name,
            id: hero.id,
            isFavorite: false,
            likeCounter: 0,
         };
      });
      return heroes;
   }
   // 'https://api.sampleapis.com/simpsons/characters'

   function onChangeFavoriteFlag() {
      isCheckedFavorites(!checkedFavorites);
   }

   return (
      <div className="App">
         <Header></Header>
         <Filter
            checkedFavorites={checkedFavorites}
            onChangeFavoriteFlag={onChangeFavoriteFlag}
         ></Filter>
         {errorStatus ? (
            <ErrorMessage />
         ) : (
            <CardBlock checkedFavorites={checkedFavorites} />
         )}
      </div>
   );
}

export default App;
