import { GET_HEROES_URL } from "./constants";

export async function getHeroes ()  {
   try {
      const res = await fetch(GET_HEROES_URL);
      const response = await res.json();
      // modifySourceHeroes(response)
      console.log(response);
      return response;
   } catch (error) {
      console.log(error)
     throw error
   }
};

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
