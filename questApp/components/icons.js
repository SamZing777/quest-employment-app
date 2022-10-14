import React from 'react';
import Icon from '@svgr-iconkit/material-design';

import { Colors, Sizes } from '../constants/theme';

export const BaseIcon = ({icon_name}) =>{
    return(
        <Icon name={icon_name} size={Sizes.base * 1.2} color={Colors.dark} />
    )
}

export const LargeIcon = ({icon_name}) =>{
    return(
        <Icon name={icon_name} size={Sizes.medium * 1.25} color={Colors.dark} />
    )
}

export const SmallIcon = () =>{

}
