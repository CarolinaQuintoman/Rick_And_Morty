import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
           case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharactersFav, action.payload],
                allCharactersFav: [...state.allCharactersFav, action.payload]
            }
            case REMOVE_FAV:
                let filterdFavorite = state.myFavorites.filter((character) => character.id !== action.payload )
                return{
                    ...state,
                    myFavorites: filterdFavorite
                }
            case FILTER:
                const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === action.payload)
                return{
                    ...state,
                    myFavorites: allCharactersFiltered
                }
            case ORDER:
                const allCharactersFavCopy = [...state.allCharactersFav]
                return {
                    ...state,
                    myFavorites:
                    action.payload === 'A'
                    ? allCharactersFavCopy.sort((a , b) => a.id - b.id)
                    :allCharactersFavCopy.sort((a,b) => b.id - a.id)
                } 

            default:
            return {
                ...state
            }
        }
}

export default reducer;