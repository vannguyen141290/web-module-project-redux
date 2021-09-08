export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE ="REMOVE_FAVORITE";
export const TOGGLE_DISPLAY = "TOGGLE_DISPLAY";


export const addFavorite = (favoriteMovie) => {
    return ({type: ADD_FAVORITE, payload: favoriteMovie})
}

export const removeFavorite = id => {
    return ({type: REMOVE_FAVORITE, payload: id})
}

export const toggleDisplay = () => {
    return ({type: TOGGLE_DISPLAY})
}