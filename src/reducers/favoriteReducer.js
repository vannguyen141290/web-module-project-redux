import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoriteActions';

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
                displayFavorites: true
            })

        case(REMOVE_FAVORITE):
            return ({
                ...state,
                favorites: state.favorites.filter(movie => movie.id !== action.payload)
            });


        default:
            return state
    }
}

export default favoriteReducer;