import React from 'react';
import { 
    View
} from 'react-native';

import { BoldText, GrayedText } from './texts';
import { RoundedImage } from './image';
import { LargeIcon } from './icons';
import { UserImage } from '../constants/images';
import styles from '../styles/comp';
import { Spaces } from '../constants/theme';

export const UserProfile = ({icon}) =>{
    return(
        <View style={styles.userProfile}>
            <RoundedImage img={UserImage.William} />
            <View style={{marginRight: Spaces.small_width * 2}}>
                <BoldText text="William Calvin" />
                <GrayedText text="Ready to work always" />
            </View>
            <LargeIcon icon_name={icon} />
        </View>
    )
}

export const UserProfileWithoutIcon = () =>{
    return(
        <View style={styles.userProfile}>
            <RoundedImage img={UserImage.William} />
            <View style={{marginRight: Spaces.small_width * 2}}>
                <BoldText text="William Calvin" />
                <GrayedText text="Ready to work always" />
            </View>
        </View>
    )
}
