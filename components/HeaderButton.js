import React from "react"
import {HeaderButton} from "react-navigation-header-buttons"
import {Ionicons} from "@expo/vector-icons" // This can be changed to use the Material Design icons
import Colors from "../constants/Colors"
import Platform from "react-native-web/src/exports/Platform";

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            IconSize={23}
            color={(Platform.OS === "android") ? "#FFFFFF": Colors.primaryColor }/>
    )
}

export default CustomHeaderButton
