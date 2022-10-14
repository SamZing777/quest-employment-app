import React from 'react';
import { Dimensions } from 'react-native';

let {width, height} = Dimensions.get("screen");

export const Sizes = {
    large: width * 0.1,
    medium: width * 0.075,
    base: width * 0.05,
    small: width * 0.01
}

export const Spaces = {
    large_width: width * 0.1,
    medium_width: width * 0.075,
    base_width: width * 0.05,
    small_width: width * 0.01,
    large_height: height * 0.1,
    medium_height: height * 0.075,
    base_height: height * 0.05,
    small_height: height * 0.01
}

export const Colors = {
    light: "aliceblue",
    primary: "#004289",
    dark: "#000",
    orange: "#F8B947",
    purple: "#944EBF",
    green: "#008080",
    skyBlue: "#ADD8E6",
    gray: "gray"
}
