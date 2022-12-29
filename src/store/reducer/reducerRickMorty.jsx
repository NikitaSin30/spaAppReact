const initialState = {
   heroes: [],
   selectedError: false,
};

export const reducerRickMorty = (state = initialState, action) => {
   switch (action.type) {
      case 'LOADED_HEROES':
         return {
            ...state,
            heroes: action.payload,
         };
      case 'UPDATE_HEROES':
         return {
            ...state,
            heroes: action.payload,
         };
      case 'ERROR_LOADING':
         return {
            ...state,
            selectedError: true,
         };
      default:
         return state;
   }
};
