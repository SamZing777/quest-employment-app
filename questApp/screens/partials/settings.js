import React from 'react';
import {
    Pressable,
    View
} from 'react-native';

import { Paragraph } from '../../components/texts';
import { BaseIcon } from '../../components/icons';
import styles from '../../styles/styles';

export const Settings = ({icon_name, text}) =>{
    return(
        <Pressable onPress={null}
        style={styles.settingsRow}>
            <View style={styles.innerRow}>
                <BaseIcon icon_name={icon_name} />
                <Paragraph text={text} />
            </View>
            <BaseIcon icon_name="chevron-right" />
        </Pressable>
    )
}
