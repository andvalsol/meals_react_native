import React from "react"
import {View, Text} from "react-native"
import {useSelector} from "react-redux";

const FavoritesScreen = props => {
    const availableMeals = useSelector((state) => {
        return state.meals.favoriteMeals
    })

    return (
        <View style={styles.container}>
            <Text>
                Dummy favorites
            </Text>
        </View>
    )
}

FavoritesScreen.navigationOptions = {
    headerTitle: "Your favorites"
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default FavoritesScreen