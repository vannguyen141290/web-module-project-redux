export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE ="REMOVE_FAVORITE"


export const addFavorite = (favoriteMovie) => {
    return ({type: ADD_FAVORITE, payload: favoriteMovie})
}

export const removeFavorite = id => {
    return ({type: REMOVE_FAVORITE, payload: id})
}