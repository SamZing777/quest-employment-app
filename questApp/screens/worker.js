import React, { useState, useCallback } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';

import { UserProfileWithoutIcon } from '../components/userProfileBrief';
import { Work, CurrentDate } from './partials/worker';
import { FilledButtons } from '../components/buttons';
import { Colors, Spaces, Sizes } from '../constants/theme';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const WorkerScreen = () =>{
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
      }, []);

    return(
        <ScrollView
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                />
          }>
            <UserProfileWithoutIcon />
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

            <CurrentDate />
        </ScrollView>
    )
}

export default WorkerScreen;
