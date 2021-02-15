import React from "react"
import {View, FlatList, Button, Text} from "react-native"
import {CATEGORIES} from "../data/dummy-data"
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
    const categoryID = props.navigation.getParam("categoryID")

    const displayedMeals = CATEGORIES.filter((meal) => meal.categoryID.contains(categoryID))

    const renderMeal = (itemData) => {
        return (
            <MealItem title={itemData.item.title}
                      duration={itemData.item.duration}
                      complexity={itemData.item.complexity}
                      affordability={itemData.item.affordability}
                      imageUrl={itemData.item.imageUrl}
                      onSelect={
                          // TODO
                      }/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{width: "100%"}}
                keyExtractor={(item, _) => item.id}
                data={displayedMeals}
                renderItem={}/>
            <Button
                title="See details"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: "MealDetailScreen"
                    })
                }}/>
            <Button
                title="Go back"
                onPress={() => {
                    props.navigation.pop()
                }}/>
        </View>
    )
}

// As we can see the navigationOptions can be used as an object as well as a function
CategoryMealsScreen.navigationOptions = (navigationData) => {
const categoryID = navigationData.navigation.getParam("categoryID")

    const selectedCategory = CATEGORIES.find((category) => category.id === categoryID)

    return {
        headerTitle: selectedCategory.title
    }
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})