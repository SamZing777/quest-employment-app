import React from 'react';
import {
    View,
    TextInput
} from 'react-native'

import { BaseIcon } from './icons';
import { Colors } from '../constants/theme';
import styles from '../styles/comp';

export const InputField = ({place, icon}) =>{
    return(
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder={place}
            placeholderTextColor={Colors.dark}
            color={Colors.dark}
            value={null}
            onChangeText={null}
            />
            <BaseIcon icon_name={icon} />
        </View>
    )
}
