import React from "react"
import {View, Text} from "react-native"

const MealDetailsScreen = props => {
    return (
        <View style={styles.container}>
            <Text>
                Meal Screen
            </Text>
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