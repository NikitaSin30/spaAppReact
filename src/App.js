/* eslint-disable array-callback-return */
import './App.css';
import Header from './Componets/Header/Header';
import CardBlock from './Componets/CardComponent/CardBlock';
import Filter from './Componets/Filter/Filter';
import { useEffect, useState } from 'react';
import { getHeroes } from './ConnectApi/getHeroes';
import ErrorMessage from './Componets/ErrorMessage/ErrorMessage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setHeroesRickyMorty, setErrorStatus, setLoading } from './store/actions/index.js';
import LoadingComponets from './Componets/loadingComponent/LoadingComponent.jsx';
function App() {
   const [checkedFavorites, isCheckedFavorites] = useState(false);
   const isError = useSelector(
      (state) => state.reducerRickMorty.isError,
   );
   const isLoading = useSelector(
      (state) => state.reducerRickMorty.isLoading,
   );
   const dispatch = useDispatch();

   const setHeroes = async () => {
      dispatch(setLoading())
      try {
         const heroes = await getHeroes();
         dispatch(setHeroesRickyMorty(heroes));
      } catch (error) {
         dispatch(setErrorStatus());
      }
   };

   useEffect(() => {
      setHeroes();
   }, []);


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
         {isLoading ? <LoadingComponets/> : null}
         {isError ? (
            <ErrorMessage />
         ) : (
            <CardBlock checkedFavorites={checkedFavorites} />
         )}
      </div>
   );
}

export default App;
