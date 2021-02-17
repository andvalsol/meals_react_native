import React, {useEffect, useCallback} from "react"
import {View, Text, Button} from "react-native"
import {HeaderButton, Item} from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton"
import {useSelector, useDispatch} from "react-redux"
import {toggleFavorite} from "../store/actions/meals"


const MealDetailsScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)

    // Get the meal id
    const mealID = props.navigation.getParam("mealID")

    const isMealFavorite = useSelector(state => state.meals.favoriteMeals.some((meal) => meal.id === mealID))

    const selectedMeal = availableMeals.find((meal) => meal.id === mealID)

    const dispatch = useDispatch()

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealID))
    }, [mealID])

    useEffect(() => {
        props.navigation.setParams({ // Send this parameter when the component renders again, in order to avoid infinite loop we use useEffect
            mealTitle: selectedMeal.title
        })

        props.navigation.setParams({
            toggleFavoriteHandler: toggleFavoriteHandler
        })

        props.navigation.setParams({
            isMealFavorite: isMealFavorite
        })
    }, [selectedMeal, toggleFavoriteHandler, isMealFavorite])

    console.log(selectedMeal)

    return (
        <View style={styles.container}>
            <Text>
                Meal Screen
            </Text>
            <Button
                title="Go to categories"
                onPress={() => {
                    props.navigation.popToTop() // Takes us back to the root screen
                }}/>
        </View>
    )
}

MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam("mealTitle")
    const toggleFavoriteHandler = navigationData.navigation.getParam("toggleFavoriteHandler")
    const isMealFavorite = navigationData.navigation.getParam("isMealFavorite")

    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButton
                HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favorite"
                    iconName= {(isMealFavorite) ? "ios-star" : "ios-star-outline"}
                    onPress={toggleFavoriteHandler}/>
            </HeaderButton>
        )
    }
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})