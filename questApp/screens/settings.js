import React from 'react';
import {ScrollView} from 'react-native';

import { LargeText } from '../components/texts';
import { UserProfile } from '../components/userProfileBrief';
import { Settings } from './partials/settings';
import Line from '../components/line';

const SettingsScreen = () =>{
    return(
        <ScrollView>
            <UserProfile icon="mode-edit" />
            <LargeText text="Account" />
            <Settings icon_name="email" text="Email" />
            <Settings icon_name="local-phone" text="Mobile" />
            <Settings icon_name="location-on" text="Address" />
            <Settings icon_name="account-balance" text="Bank Details" />
            <Line />
    
            <LargeText text="Settings" />
            <Settings icon_name="language" text="Language" />
            <Settings icon_name="notifications" text="Notificatons" />
        </ScrollView>
    )
}

export default SettingsScreen;
