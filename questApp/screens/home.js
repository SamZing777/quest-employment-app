import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import { Fields, JobButtons } from './partials/home';

const HomeScreen = () =>{
    return(
        <ScrollView>
            <Fields />
            <JobButtons />
        </ScrollView>
    )
}

export default HomeScreen;
