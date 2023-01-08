const initialState = {
   heroes: [],
   remoteHeroes: [],
   isError: false,
   isLoading: false,
   comments: [],
   nameUser:''
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
            comments: [...state.comments, action.payload],
         };
      case 'REMOTE_CARD':
         return {
            ...state,
            remoteHeroes: [...state.remoteHeroes, action.payload]
               .flat()
               .sort((a, b) => a.id - b.id),
         };
      case 'REBUILD_CARD':
         return {
            ...state,
            heroes: [...state.heroes, action.payload]
               .flat()
               .sort((a, b) => a.id - b.id),
            remoteHeroes: [...state.remoteHeroes].filter(
               (item) => item.id !== action.payload[0].id,
            ),
         };
         case 'SET_USER_NAME':
            console.log(action.payload);
         return {
            ...state,
            nameUser: action.payload,
         };
      default:
         return state;
   }
};
