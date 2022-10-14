import React from 'react';
import {
    Text
} from 'react-native';

import styles from '../styles/comp';

export const Title = ({text}) =>{
    return(
        <Text style={styles.titleText}>
            {text}
        </Text>
    )
}

export const LargeText = ({text}) =>{
    return(
        <Text style={styles.largeText}>
            {text}
        </Text>
    )
}

export const BoldText = ({text}) =>{
    return(
        <Text style={styles.boldText}>
            {text}
        </Text>
    )
}

export const Paragraph = ({text}) =>{
    return(
        <Text style={styles.paragraph}>
            {text}
        </Text>
    )
}

export const PrimaryParagraph = ({text}) =>{
    return(
        <Text style={styles.primaryText}>
            {text}
        </Text>
    )
}

export const MediumText = ({text}) =>{
    return(
        <Text style={styles.mediumText}>
            {text}
        </Text>
    )
}

export const GrayedText = ({text}) =>{
    return(
        <Text style={styles.grayText}>
            {text}
        </Text>
    )
}

export const SmallGrayedText = ({text}) =>{
    return(
        <Text style={styles.smallGrayText}>
            {text}
        </Text>
    )
}
