/* eslint-disable array-callback-return */
import './App.css';
import Main from './Componets/page/MainPage.jsx';
import { Routes, Route } from 'react-router-dom';
import Header from './Componets/Header/Header';
import CardBlock from './Componets/CardComponent/CardBlock';
import Filter from './Componets/Filter/Filter';
import { useEffect, useState } from 'react';
import { getHeroes } from './ConnectApi/getHeroes';
import ErrorMessage from './Componets/ErrorMessage/ErrorMessage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
   setHeroesRickyMorty,
   setErrorStatus,
   setLoading,
} from './store/actions/index.js';
import RemotedCardPage from './Componets/page/RemotedCardPage';

function App() {
   const [checkedFavorites, isCheckedFavorites] = useState(false);
   const isError = useSelector((state) => state.reducerRickMorty.isError);
   const isLoading = useSelector((state) => state.reducerRickMorty.isLoading);
   const dispatch = useDispatch();

   const setHeroes = async () => {
      dispatch(setLoading());
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

   function onChangeFavoriteFilter() {
      isCheckedFavorites(!checkedFavorites);
   }

   return (
      <div className="App">
         <Header></Header>
         <Filter
            checkedFavorites={checkedFavorites}
            onChangeFavoriteFilter={onChangeFavoriteFilter}
         ></Filter>
         <Routes>
            <Route
               path="/"
               element={
                  <Main
                     checkedFavorites={checkedFavorites}
                     isError={isError}
                     isLoading={isLoading}
                  />
               }
            />
            <Route path="/remotedCards" element={<RemotedCardPage />} />
         </Routes>
      </div>
   );
}

export default App;
