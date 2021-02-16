import React from "react"
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator} from "react-navigation-stack"
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import CategoriesScreen from "../screens/CategoriesScreen.js"
import CategoryMeals from "../screens/CategoryMealsScreen.js"
import MealDetailsScreen from "../screens/MealDetailsScreen"
import {Platform} from "react-native"
import Colors from "../constants/Colors"
import FavoritesScreen from "../screens/FavoritesScreen"
import {Ionicons} from "@expo/vector-icons"
import FiltersScreen from "../screens/FiltersScreen";


const defaultNavigationOptions = {
    // Options that apply to every screen
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === "android" ? "#ffffff" : Colors.primaryColor
    }
}

const MealsNavigator = createStackNavigator({
    CategoriesScreen: CategoriesScreen, // This is the short version of setting the screen
    CategoryMealsScreen: { // This is the long version of setting the screen
        screen: CategoryMeals
    },
    MealDetailsScreen: {
        screen: MealDetailsScreen
    }
}, defaultNavigationOptions)

const favoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealsDetail: MealDetailsScreen
}, defaultNavigationOptions)

const tabScreenContent = {
    MealsScreen: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInformation) => {
                return <Ionicons
                    name="ios-restaurant"
                    size={25}
                    color={tabInformation.tintColor}/>
            },
            tabBarColor: Colors.primaryColor
        }
    },
    FavoritesScreen: {
        screen: favoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInformation) => {
                return <Ionicons
                    name="ios-star"
                    size={25}
                    color={tabInformation.tintColor}/>
            }
        },
        tabBarColor: Colors.accentColor
    }
}

const MealsTabNavigator = Platform.OS === "ios" ? createBottomTabNavigator(tabScreenContent, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor,

    }
}) : createMaterialBottomTabNavigator(tabScreenContent, {
    activeTintColor: Colors.accentColor,
    shifting: true
})

// Create a new stack so that we can have a custom header
const filtersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: "Filters"
    }
},defaultNavigationOptions)

const drawerNavigator = createDrawerNavigator({
    MealsFavorites: MealsTabNavigator,
    Filters: filtersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontSize: 18
        }
    }
})

export default createAppContainer(drawerNavigator)