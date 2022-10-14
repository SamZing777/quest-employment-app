import React from 'react';
import { 
    Pressable,
    View
} from 'react-native';

import { BoldText,
    GrayedText,
    Paragraph 
} from '../../components/texts';
import styles from '../../styles/styles';


export const MessageBrief = ({title, date, info}) =>{
    return(
        <Pressable style={styles.message}>
            <View style={styles.row}>
                <BoldText text={title} />
                <GrayedText text={date} />
            </View>
            <Paragraph text={info} 
            />
        </Pressable>
    )
}

export const Induction = () =>{
    return(
        <MessageBrief title="Induction" date="10/10/22"
        info="Hello Williams! Your Induction takes place on tuesday by 10AM at Greencore, 
        Hatton Close (UNIT E), 
        Moulton Park Industrial Estate, NN3 6RX."
        />
    )
}

export const ShiftConfirmation = () =>{
    return(
        <MessageBrief title="Shift Confirmation" date="12/10/22"
        info="Hello! This is to confirm your shift today is 14:00 - 18:00. Please ensure full attendance.
        Please remember to sign in and out.
        Any issues, please let us know. Thanks."
        />
    )
}

export const SalaryPayment = () =>{
    return(
        <MessageBrief title="Salary Payment" date="18/10/22"
        info="This is to inform you that your salary have been paid for the Week."
        />
    )
}
