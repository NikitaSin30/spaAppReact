/* eslint-disable array-callback-return */
import './App.css';
import Header from './Componets/Header/Header';
import CardBlock from './Componets/CardComponent/CardBlock';
import Filter from './Componets/Filter/Filter';
import { useCallback, useEffect, useState } from 'react';
import getHeroes from './ConnectApi/getHeroes';
import { HEROES_API } from './ConnectApi/constants';
import ErrorMessage from './Componets/ErrorMessage/ErrorMessage';



function App() {
   const [heroes, setHeroes] = useState([]);
   const [checkedFavorites, setCheckedFavorites] = useState(false);
   const [messageError, setMessageError] = useState(false);

   const getHeroesArray = async (url) => {
      try {
         const response = await getHeroes(url);
         setHeroes(
            response.results.map((e) => {
               return {
                  image: e.image,
                  name: e.name,
                  id: e.id,
                  isFavorite: false,
                  likeCounter: 0,
               };
            }),
         );
      } catch (error) {
         console.log(new Error(error));
         setMessageError(!messageError);
      }
   };

   useEffect(() => {
      console.log(1);
      getHeroesArray(HEROES_API);
   }, []);

   function deleteCard(id) {
      console.log(id);
      setHeroes((prevState) => prevState.filter((el) => el.id !== id));
   }

   function onCheckLike(id) {
      setHeroes((heroes) =>
         heroes.map((el) => {
            if (el.id === id && !el.isFavorite) {
               el.isFavorite = true;
               el.likeCounter += 1;
               return { ...el };
            } else if (el.id === id && el.isFavorite) {
               el.isFavorite = false;
               el.likeCounter -= 1;
               return { ...el };
            } else {
               return { ...el };
            }
         }),
      );
   }

   function onCheckFavorites() {
      setCheckedFavorites(!checkedFavorites);
      // if (!checkedFavorites) {
      //    setHeroes((prevState) =>
      //       prevState.filter((el) => el.isFavorite === true),
      //    );
      // } else {
      //    getHeroesArray(HEROES_API);
      // }
   }


   return (
      <div className="App">
         <Header></Header>
         <Filter
            checkedFavorites={checkedFavorites}
            onCheckFavorites={onCheckFavorites}
         ></Filter>
         {messageError ? (
            <ErrorMessage />
         ) : (
            <CardBlock
               checkedFavorites ={checkedFavorites}
               heroes={heroes}
               onCheckLike={onCheckLike}
               deleteCard={deleteCard}
            />
         )}
      </div>
   );
}

export default App;
