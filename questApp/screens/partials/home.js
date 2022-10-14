import React from 'react';
import {View} from 'react-native';

import { InputField } from '../../components/input';
import { FilledButtons } from '../../components/buttons';
import { Colors, Sizes, Spaces } from '../../constants/theme';

export const Fields = () =>{
    return(
        <View style={{marginTop: 40}}>
            <InputField place="Search by Job type" icon="work" />
            <InputField place="Search by Location" icon="location-pin" />
        </View>
    )
}

export const JobButtons = () =>{
    return(
        <View style={{flex: 1, alignItems: "center"}}>
            <FilledButtons text="Warehouse Jobs"
            buttonColor={{
            backgroundColor: Colors.orange, 
            borderRadius: Sizes.small * 2,
            padding: Spaces.base_width / 1.5,
            alignItems: "center"}}
            />
            <FilledButtons text="Commercial Jobs" 
            buttonColor={{
            backgroundColor: Colors.purple, 
            borderRadius: Sizes.small * 2,
            padding: Spaces.base_width / 1.5,
            alignItems: "center"}}
            />
            <FilledButtons text="Technical Jobs" 
            buttonColor={{
            backgroundColor: Colors.green, 
            borderRadius: Sizes.small * 2,
            padding: Spaces.base_width / 1.5,
            alignItems: "center"}}
            />
            <FilledButtons text="Food Production Jobs" 
            buttonColor={{
            backgroundColor: Colors.skyBlue, 
            borderRadius: Sizes.small * 2,
            padding: Spaces.base_width / 1.5,
            alignItems: "center"}}
            />
        </View>
    )
}

