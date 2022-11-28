import { GET_HEROES_URL } from "./constants";

export async function getHeroes ()  {
   try {
      const res = await fetch(GET_HEROES_URL);
      const response = await res.json();
      return response;
   } catch (error) {
      console.log(error)
     throw error
   }
};
