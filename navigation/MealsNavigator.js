import {createStackNavigator, createAppContainer} from "react-navigation-stack"
import CategoriesScreen from "../screens/CategoriesScreen.js"
import CategoryMeals from "../screens/CategoryMealsScreen.js"
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {Platform} from "react-native";
import Colors from "../constants/Colors";


const MealsNavigator = createStackNavigator({
    CategoriesScreen: CategoriesScreen, // This is the short version of setting the screen
    CategoryMealsScreen: { // This is the long version of setting the screen
        screen: CategoryMeals
    },
    MealDetailsScreen: {
        screen: MealDetailsScreen
    }
}, {
    // Options that apply to every screen
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === "android" ? "#ffffff" : Colors.primaryColor
    }
})

export default createAppContainer(MealsNavigator)