const initialState = {
   heroes: [],
   isError: false,
   isLoading:false,
   comments:[]
};

export const reducerRickMorty = (state = initialState, action) => {
   switch (action.type) {
      case 'LOADED_HEROES':
         return {
            ...state,
            heroes: action.payload,
            isLoading: false,
         };
      case 'UPDATE_HEROES':
         return {
            ...state,
            heroes: action.payload,
         };
      case 'ERROR_LOADING':
         return {
            ...state,
            isError: true,
         };
       case 'LOADING':
         return {
            ...state,
            isLoading: true,
         };
         case 'SET_COMMENT':
         return {
            ...state,
            comments: [...state.comments,action.payload].sort((a, b) => a.id - b.id)
         };

      default:
         return state;
   }
};
