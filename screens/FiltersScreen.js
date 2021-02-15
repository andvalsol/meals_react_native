import React from "react"
import {View, Text} from "react-native"

const FiltersScreen = props => {
    return (
        <View style={styles.container}>
            <Text>
                Filters Screen
            </Text>
        </View>
    )
}

export default FiltersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})