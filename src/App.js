/* eslint-disable array-callback-return */
import './App.css';
import Header from './Componets/Header/Header';
import CardBlock from './Componets/CardComponent/CardBlock';
import Filter from './Componets/Filter/Filter';
import { useEffect, useState } from 'react';
import { getHeroes } from './ConnectApi/getHeroes';
import ErrorMessage from './Componets/ErrorMessage/ErrorMessage';

function App() {
   const [heroes, setHeroes] = useState([]);
   const [checkedFavorites, isCheckedFavorites] = useState(false);
   const [messageError, setMessageError] = useState(false);

   const getHeroesArray = async () => {
      let result;
      try {
         result = await getHeroes();
      } catch (error) {
         console.log(error);
         setMessageError(!messageError);
      }
      modifySourceHeroes(result);
   };

   useEffect(() => {
      getHeroesArray();
   }, []);

   function modifySourceHeroes(data) {
      setHeroes(
         data.results.map((hero) => {
            return {
               image: hero.image,
               name: hero.name,
               id: hero.id,
               isFavorite: false,
               likeCounter: 0,
            };
         }),
      );
   }

   function deleteCard(id) {
      setHeroes((prevState) => prevState.filter((el) => el.id !== id));
   }

   function onCheckLike(id) {
      setHeroes((heroes) =>
         heroes.map((el) => {
            if (el.id === id && !el.isFavorite) {
               el.isFavorite = true;
               el.likeCounter += 1;
               return el;
            }
            if (el.id === id && el.isFavorite) {
               el.isFavorite = false;
               el.likeCounter -= 1;
               return el;
            }
            return el;
         }),
      );
   }

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
         {messageError ? (
            <ErrorMessage />
         ) : (
            <CardBlock
               checkedFavorites={checkedFavorites}
               heroes={heroes}
               onCheckLike={onCheckLike}
               deleteCard={deleteCard}
            />
         )}
      </div>
   );
}

export default App;
