import React from "react"
import {View, Text} from "react-native"

const FavoritesScreen = props => {
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