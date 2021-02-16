import React, {useState, useEffect, useCallback} from "react"
import {View, Text, Switch} from "react-native"
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{
                    true: Colors.accentColor
                }}
                thumbColor={Colors.primaryColor}
                value={props.state}
                onValueChange={props.onValueChange}/>
        </View>
    )
}

const FiltersScreen = (props) => {
    const {navigation} = props

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isVeganFree, setIsVeganFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegetarianFree, setIsVegetarianFree] = useState(false)

    const saveFilters = useCallback(() => {
            const applyFilters = {
                glutenFree: isGlutenFree,
                lactoseFree: isLactoseFree,
                vegan: isVeganFree,
                vegetarian: isVegetarianFree
            }
        },
        [isGlutenFree, isLactoseFree, isVeganFree, isVegetarianFree]
    )

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        })
    }, [saveFilters]) // useEffect will take effect once saveFilters change

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Filters Screen
            </Text>
            <FilterSwitch
                label="Gluten free"
                state={isGlutenFree}
                onValueChange={(newValue) => {
                    setIsGlutenFree(newValue)
                }}/>
            <FilterSwitch
                label="Lactose free"
                state={isLactoseFree}
                onValueChange={(newValue) => {
                    setIsLactoseFree(newValue)
                }}/>
            <FilterSwitch
                label="Vegan free"
                state={isVeganFree}
                onValueChange={(newValue) => {
                    setIsVeganFree(newValue)
                }}/>
            <FilterSwitch
                label="Vegetarian free"
                state={isVegetarianFree}
                onValueChange={(newValue) => {
                    setIsVegetarianFree(newValue)
                }}/>
        </View>
    )
}

FiltersScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Filters",
        headerLeft: (
            <HeaderButtons
                HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={
                        navigationData.navigation.toggleDrawer()
                    }/>
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons
                headerButtonComponent={CustomHeaderButton}>
                <Item
                    title="Save"
                    iconName="ios-save"
                    onPress={() => {
                        navigationData.navigation.getParam("save")()
                    }}/>
            </HeaderButtons>
        )
    }
}

export default FiltersScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 10
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: "center"
    }
})