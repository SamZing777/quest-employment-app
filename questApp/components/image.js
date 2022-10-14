import React from 'react';
import { Image } from 'react-native';

import styles from '../styles/comp';

export const RoundedImage = ({img}) =>{
    return(
        <Image source={img} 
        style={styles.roundedImage} />
    )
}
