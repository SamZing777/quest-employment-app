import React from 'react';
import {
    View,
    ActivityIndicator 
} from "react-native";

import { Colors, Sizes } from "../constants/theme";
// import styles from "../screens/styles";

export const Loading = () =>{
    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
        }}>
            <ActivityIndicator color={Colors.primary} size={Sizes.large * 2} />
        </View>
    )
}
