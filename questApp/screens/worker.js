import React from 'react';
import { ScrollView, View } from 'react-native';

import UserProfile from '../components/userProfileBrief';
import { Work } from './partials/worker';
import { FilledButtons } from '../components/buttons';
import { Colors, Spaces, Sizes } from '../constants/theme';

const WorkerScreen = () =>{
    return(
        <ScrollView>
            <UserProfile />
            <Work />
            <View style={{flex: 1, alignItems: "center", marginTop: Spaces.medium_height}}>
                <FilledButtons text="Report an issue"
                buttonColor={{
                backgroundColor: Colors.orange, 
                borderRadius: Sizes.small * 2,
                padding: Spaces.base_width / 1.5,
                alignItems: "center"}}
                />
            </View>
        </ScrollView>
    )
}

export default WorkerScreen;
