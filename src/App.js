/* eslint-disable array-callback-return */
import './App.css';
import Header from './Componets/Header/Header';
import CardBlock from './Componets/CardComponent/CardBlock';
import Filter from './Componets/Filter/Filter';
import { useEffect, useState } from 'react';
import getHeroes from './ConnectApi/getHeroes';
import { HEROES_API } from './ConnectApi/constants';

function App() {
   const [heroes, setHeroes] = useState([]);
   // let [likesCounter, setLikeCounter] = useState(0);
   const [checkedFavorites, setCheckedFavorites] = useState(false);
   // const [isFavorite,setIsFavorite] = useState(false);

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
         alert(error, 'Ошибка загрузки c сервера');
      }
   };

   useEffect(() => {
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
      setHeroes((prevState) =>
         prevState.filter((el) => el.isFavorite === true),
      );
   }

   return (
      <div className="App">
         <Header></Header>
         <Filter
            // isFavorite ={isFavorite}
            checkedFavorites={checkedFavorites}
            onCheckFavorites={onCheckFavorites}
         ></Filter>
         <CardBlock
            heroes={heroes}
            //  likesCounter={likesCounter}
            // key={heroes.id}
            onCheckLike={onCheckLike}
            deleteCard={deleteCard}
         ></CardBlock>
      </div>
   );
}
export default App;
