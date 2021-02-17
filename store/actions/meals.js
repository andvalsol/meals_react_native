export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"

export const toggleFavorite = (mealID) => {
    return {
        type: TOGGLE_FAVORITE,
        mealID: mealID
    }
}