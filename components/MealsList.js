import React from "react"
import {Button, FlatList, StyleSheet, View} from "react-native"
import MealItem from "./MealItem";

const MealsList = (props) => {
    const renderMeal = (itemData) => {
        return (
            <MealItem title={itemData.item.title}
                      duration={itemData.item.duration}
                      complexity={itemData.item.complexity}
                      affordability={itemData.item.affordability}
                      imageUrl={itemData.item.imageUrl}
                      onSelect={() => props.onItemSelected(itemData.item)}/>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{width: "100%"}}
                keyExtractor={(item, _) => item.id}
                data={props.list}
                renderItem={renderMeal}/>
            <Button
                title="See details"
                onPress={props.onItemSelected}/>
            <Button
                title="Go back"
                onPress={() => {
                    props.navigation.pop()
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealsList