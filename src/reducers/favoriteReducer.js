import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_DISPLAY } from '../actions/favoriteActions';

const initialSate = {
    favorites: [],
    displayFavorites: false
}

const favoriteReducer = (state = initialSate, action) => {
    switch(action.type){
        case(ADD_FAVORITE):
            return ({
                ...state,
                favorites: [...state.favorites, action.payload],
            })

        case(REMOVE_FAVORITE):
            return ({
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload)
            });

        case(TOGGLE_DISPLAY):
            return ({
                ...state,
                displayFavorites: !state.displayFavorites
            })
        default:
            return state
    }
}

export default favoriteReducer;