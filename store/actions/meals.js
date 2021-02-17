export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"
export const SET_FILTERS = "SET_FILTERS"

export const toggleFavorite = (mealID) => {
    return {
        type: TOGGLE_FAVORITE,
        mealID: mealID
    }
}

export const setFilters = (filters) => {
export const setFilters = (filters) => {
    return {
        type: SET_FILTERS,
        filters: filters
    }
}