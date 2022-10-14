import React from 'react';
import {ScrollView, View} from 'react-native';

import { Title} from '../components/texts';
import { Spaces } from '../constants/theme';

const SupportScreen = () =>{
    return(
        <ScrollView>
            <View style={{flex: 1, 
                flexDirection: "row",
                flexWrap: "wrap", 
                justifyContent: "center",
                marginVertical: Spaces.large_height * 3.1
            }}
            >
                <Title text="To Implement Live chat Support from Tildo" />
            </View>
        </ScrollView>
    )
}

export default SupportScreen;
