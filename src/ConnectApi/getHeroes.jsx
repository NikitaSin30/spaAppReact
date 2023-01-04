import { GET_HEROES_URL } from './constants';

export async function getHeroes() {
   try {
      const response = await fetch(GET_HEROES_URL);
      const result = await response.json();
      const heroes = await modifySourceHeroes(result);
      return heroes;
   } catch (error) {
      throw new Error(error)
   }
}

function modifySourceHeroes(data) {
   const heroes = data.results.map((hero) => {
      return {
         image: hero.image,
         name: hero.name,
         id: hero.id,
         isFavorite: false,
         likeCounter: 0,
         isCommentsShow:false,
         comments:[],
      };
   });
   return heroes;
}
