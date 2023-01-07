export const setHeroesRickyMorty = (heroes) => {
   return {
      type: 'LOADED_HEROES',
      payload: heroes,
   };
};

export const setLoading = () => {
   return {
      type: 'LOADING',
   };
};

export const setErrorStatus = () => {
   return {
      type: 'ERROR_LOADING',
   };
};

export const setUpdateHeroesRickyMorty = (heroes) => {
   return {
      type: 'UPDATE_HEROES',
      payload: heroes,
   };
};
export const setCommentRickMorty = (comment) => {

   return {
      type: 'SET_COMMENT',
      payload:comment
   };
};

export const setRemoteCard = (card) =>{
   return {
      type: 'REMOTE_CARD',
      payload: card
   }
}

export const setRebuildCard =(card) => {
   return {
      type:'REBUILD_CARD',
      payload:card,
   }
}
