export class RickMorty {
   constructor(heroes) {
      this.heroes = heroes;
   }
   switchIsComments(id) {
      return this.heroes.map((el) => {
         if (el.id === id && !el.isCommentsShow) {
            el.isCommentsShow = true;
            return el;
         }
         if (el.id === id && el.isCommentsShow) {
            el.isCommentsShow = false;
            return el;
         }
         return el;
      });
   }
   switchIsLikeCard(id) {
      return this.heroes.map((el) => {
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
   }
   deleteCard(id) {
      return this.heroes.filter((el) => el.id !== id);
   }
   getCard(id) {
      return this.heroes.filter((el) => el.id === id);
   }
}
