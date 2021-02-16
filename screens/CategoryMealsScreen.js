import React from "react"
import {CATEGORIES} from "../data/dummy-data"
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = props => {
    const categoryID = props.navigation.getParam("categoryID")

    const displayedMeals = CATEGORIES.filter((meal) => meal.categoryID.contains(categoryID))

    return (
        <MealsList
            list={displayedMeals}
            onItemSelected={(selectedMeal) => {
                    props.navigation.navigate({
                        routeName: "MealDetailScreen",
                        params: {
                            mealID: selectedMeal.id
                        }
                    })
                }
            }/>
    )
}

// As we can see the navigationOptions can be used as an object as well as a function
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryID = navigationData.navigation.getParam("categoryID")

    const selectedCategory = CATEGORIES.find((category) => category.id === categoryID)

    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMealsScreen
