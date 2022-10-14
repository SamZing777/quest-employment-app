import React from 'react';
import { ScrollView, View } from 'react-native';

import { Job, Hours, Earnings } from '../../components/card';

export const Work = () =>{
    return(
        <ScrollView horizontal={true}>
            <Job />
            <Hours />
            <Earnings />
        </ScrollView>
    )
}
