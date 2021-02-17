import {MEALS} from "../../data/dummy-data"
import {SET_FILTERS, TOGGLE_FAVORITE} from "../actions/meals";

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [] // for now we have an empty state
}

export const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const index = state.favoriteMeals.findIndex((meal) => meal.id === action.mealID)

            if (index >= 0) {
                const updatedFavoriteMeals = [...state.favoriteMeals]
                updatedFavoriteMeals.splice(index, 1)

                // Remove the meal
                return {...state, favoriteMeals: updatedFavoriteMeals}
            } else {
                const mealToAdd = state.meals.find((meal) => meal.id === action.mealID)
                // Add the meal

                return {...state, favoriteMeals: state.favoriteMeals.concat(mealToAdd)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const meals = state.meals.filter((meal) => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                } else if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                } else if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                } else if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                } else {
                    return true
                }
            })

            return {...state, filteredMeals: meals}
        default:
            return state
    }
}