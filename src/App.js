import './App.css';
import Main from './Componets/page/MainPage.jsx';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHeroes } from './ConnectApi/getHeroes';
import Layout from './Componets/layout/Layout.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  setHeroesRickyMorty,
  setErrorStatus,
  setLoading,
} from './store/actions/index.js';
import RemotedCardPage from './Componets/page/RemotedCardPage.jsx';
import LogIn from './Componets/logIn/LogIn.jsx';

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
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              checkedFavorites={checkedFavorites}
              onChangeFavoriteFilter={onChangeFavoriteFilter}
            />
          }
        >
          <Route
            index
            element={
              <Main
                checkedFavorites={checkedFavorites}
                isError={isError}
                isLoading={isLoading}
              />
            }
          />
          <Route path='/remotedCards' element={<RemotedCardPage />} />
          <Route path='/login' element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
