import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) =>{
    switch (action.type){
           case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
            case REMOVE_FAV:
                let filterdFavorite = state.myFavorites.filter((character) => character.id !== action.payload )
                return{
                    ...state,
                    myFavorites: filterdFavorite
                }
        
            default:
            return {
                ...state
            }
        }
}

export default reducer;