import React from "react"
import {View, Text, Button} from "react-native"

const MealDetailsScreen = props => {
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

export default MealDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})