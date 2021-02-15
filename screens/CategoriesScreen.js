import React from "react"
import {FlatList} from "react-native"
import {CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = props => {
    const renderItem = (itemData) => {
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: "CategoryMealsScreen",
                    params: {
                        categoryID: itemData.item.id
                    }
                })
            }}/>
    }

    return (
        <FlatList
            keyExtractor={(item, _) => item.id}
            data={CATEGORIES}
            renderItem={renderItem}
            numColumns={2}/>
    )
}

// here we append a property in the CategoriesScreen object
CategoriesScreen.navigationOptions = {
    headerTitle: "Meal categories"
}


export default CategoriesScreen