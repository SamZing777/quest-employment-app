import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
// import Icon from '@svgr-iconkit/material-design';

import { MediumText } from '../components/texts';
import styles from '../styles/comp';

export const FilledButtons = ({buttonColor, text}) =>{
    return(
        <View style={styles.filledButton}>
            <TouchableOpacity style={buttonColor}>
                <MediumText text={text} />
            </TouchableOpacity>
        </View>
    )
}

