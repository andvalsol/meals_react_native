import React from "react"
import {View, Text, Button} from "react-native"

const CategoriesScreen = props => {
    return (
        <View>
            <Text>The categories screen!</Text>
            <Button onPress={() => {
                props.navigation.navigate({
                    routeName: "CategoryMeals"
                })
            }}/>
        </View>
    )
}

export default CategoriesScreen