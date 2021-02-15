import React from "react"
import {View, TouchableOpacity, Text, StyleSheet} from "react-native"

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}>
            <View style={{
                ...styles.container,
                ...{
                    backgroundColor: props.color
                }
            }}>
                <View>
                    <Text
                        style={{fontSize: 22}}
                        numberOfLines: {2}
                        textAlign: "right">{props.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.26,
        shadowRadius: 10,
        elevation: 3, // Works only on Android
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }
})

export default CategoryGridTile