import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import UserProfile from '../components/userProfileBrief';

const SettingsScreen = () =>{
    return(
        <ScrollView>
            <UserProfile icon="mode-edit" />
        </ScrollView>
    )
}

export default SettingsScreen;
