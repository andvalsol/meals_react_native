import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from "expo-font"
import {AppLoading} from "expo"
import MealsNavigator from "./navigation/MealsNavigator"
import {enableScreens} from "react-native-screens" // This will use Fragment in Android and UIViewController for iOS for performance improvements
import {createStore, combineReducers} from "redux"
import mealsReducer from "./store/reducers/meals";
import {Provider} from "react-redux" // Store needs to be in the top most component

enableScreens()

const rootReducer = combineReducers({
    meals: mealsReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
    Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    })
}

export default function App() {
    const [isFontLoaded, setIsFontLoaded] = useState(false)

    const fontLoaded = () => {
        setIsFontLoaded(true)
    }

    if (!isFontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={setIsFontLoaded}/>
        )
    }

    return (
        <Provider
            store={store}>
            <MealsNavigator/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
