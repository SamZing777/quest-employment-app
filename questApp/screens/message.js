import React from 'react';
import {ScrollView} from 'react-native';

import { 
    Induction, 
    ShiftConfirmation, 
    SalaryPayment 
} from './partials/messages';

const MessageScreen = () =>{
    return(
        <ScrollView>
            <Induction />
            <ShiftConfirmation />
            <ShiftConfirmation />
            <ShiftConfirmation />
            <SalaryPayment />
        </ScrollView>
    )
}

export default MessageScreen;
