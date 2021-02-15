import {createStackNavigator, createAppContainer} from "react-navigation-stack"
import CategoriesScreen from "../screens/CategoriesScreen.js"
import CategoryMeals from "../screens/CategoryMealsScreen.js"
import MealDetailsScreen from "../screens/MealDetailsScreen";

const MealsNavigator = createStackNavigator({
    CategoriesScreen: CategoriesScreen, // This is the short version of setting the screen
    CategoryMeals: { // This is the long version of setting the screen
        screen: CategoryMeals
    },
    MealDetailsScreen: MealDetailsScreen
})

export default createAppContainer(MealsNavigator)