import CardItem from './CardItem';
import './CardBlock.css';
import { React } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateHeroesRickyMorty } from '../../store/actions/index.js';

function CardBlock({  checkedFavorites }) {
   const dispatch = useDispatch();
   const heroesRickMorty = useSelector((state) => state.reducerRickMorty.heroes);

   function deleteCard(id) {
      const updateHeroes = heroesRickMorty.filter((el) => el.id !== id);
      dispatch(setUpdateHeroesRickyMorty(updateHeroes));
   }

   const filterFavoriteHeroes = useMemo(() => {
      return heroesRickMorty.filter((item) => item.isFavorite === true);
   }, [heroesRickMorty]);

   function onCheckLike(id) {
      const updateHeroes = heroesRickMorty.map((el) => {
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
      });
      dispatch(setUpdateHeroesRickyMorty(updateHeroes));
   }
   function switchShowComments(id) {
      const updateHeroes = heroesRickMorty.map((el) => {
         if (el.id === id && !el.isComments ) {
            el.isComments = true;
            return el;
         }
         if (el.id === id && el.isComments) {
            el.isComments = false;
            return el;
         }
         return el;
      });
      console.log(updateHeroes)
      dispatch(setUpdateHeroesRickyMorty(updateHeroes));
   }

   const customHeroes = checkedFavorites ? filterFavoriteHeroes : heroesRickMorty;

   return (
      <>
         <div className="_container">
            <div className="block__grid">
               {customHeroes.map((item) => {
                  return (
                     <CardItem
                        deleteCard={deleteCard}
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        onCheckLike={onCheckLike}
                        likeCounter={item.likeCounter}
                        isComments={item.isComments}
                        switchShowComments={switchShowComments}
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
}

export default CardBlock;
