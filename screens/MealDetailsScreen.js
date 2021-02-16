import React from "react"
import {View, Text, Button} from "react-native"
import {HeaderButton, Item} from "react-navigation-header-buttons"
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {
    // Get the meal id
    const mealID = props.navigation.getParam("mealID")

    // Search for the meal with this given mealID
    console.log("The selected meal is: " + mealID)

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
    const mealID = navigationData.navigation.getParam("mealID")

    return {
        headerTitle: mealID,
        headerRight: (
            <HeaderButton
                HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={
                        console.log("Favorite button clicked")
                    }/>
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