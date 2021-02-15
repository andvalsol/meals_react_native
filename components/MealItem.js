import React from "react"
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native"
import {Image} from "react-native-web";

const MealItem = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onSelect}>
            <View style={{
                ...styles.container,
                ...styles.header
            }}>
                <View style={{
                    ...styles.meal,
                    ...styles.detail
                }}>
                    <ImageBackground
                        style.backgroundImage
                        source={{
                            uri: props.imageUrl
                        }}>
                        <Text
                            numberOfLines: {1} // This will shorten the text if the text if very large
                            style={styles.title}>
                            {props.title}
                        </Text>
                    </ImageBackground>
                </View>
                <View style={styles.meal}>
                    <Text>{props.duration}</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                    <Text>{props.affordability.toUpperCase()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%",
        backgroundColor: "#FAFAFA"
    },
    meal: {
        flexDirection: 'row'
    },
    header: {
        height: "80%"
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    detail: {
        height: "20%",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        color: "#FFFFFF",
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "rgba(0,0,0,0,7)"
    }
})

export default MealItem