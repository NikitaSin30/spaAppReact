import CardItem from './CardItem';
import './CardBlock.css';
import { React } from 'react';

function CardBlock({
   heroes,
   deleteCard,
   likesCounter,
   onCheckLike,
   isFavorite,
   checkedFavorites,
}) {
   function filterHeroes() {
      return heroes.filter((item) => item.isFavorite === true);
   }

   const customHeroes = checkedFavorites ? filterHeroes() : heroes;
   return (
      <>
         <div className="_container">
            <div className="block__grid">
               {
               customHeroes.map((item) => {
                  return (
                     <CardItem
                        deleteCard={deleteCard}
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        isFavorite={isFavorite}
                        likesCounter={likesCounter}
                        onCheckLike={onCheckLike}
                        likeCounter={item.likeCounter}
                     />
                  );
               })
               }
            </div>
         </div>
      </>
   );
}

export default CardBlock;
