
export const setHeroesRickyMorty = (heroes) => {
    return {
        type:'LOADED_HEROES',
        payload: heroes,
    }
}

export const setErrorStatus = () =>{
    return {
        type:'ERROR_LOADING'
    }
}

export const setUpdateHeroesRickyMorty = (heroes) => {
    return {
        type: 'UPDATE_HEROES',
        payload: heroes
    }
}
