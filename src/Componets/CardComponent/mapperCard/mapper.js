

export class RickMorty  {
    constructor(array){
       this.array = array
    }
    switchShowComments (id) {
       return  this.array.map((el) => {
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
    onCheckLike(id) {
    return this.array.map((el) => {
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
}
