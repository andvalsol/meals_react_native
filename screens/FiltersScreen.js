import React from "react"
import {View, Text} from "react-native"
import {HeaderButton, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const FiltersScreen = props => {
    return (
        <View style={styles.container}>
            <Text>
                Filters Screen
            </Text>
        </View>
    )
}

FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Filters",
        headerLeft: (
            <HeaderButton
                HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={
                        navigationData.navigation.toggleDrawer()
                    }/>
            </HeaderButton>
        )
    }
}

export default FiltersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})