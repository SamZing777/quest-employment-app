import React from 'react';
import { View } from 'react-native';

import { 
    PrimaryParagraph, 
    SmallGrayedText, 
    LargeText 
} from './texts';
import styles from '../styles/comp';

export const WorkCard = ({work, grading, amount}) =>{
    return(
        <View style={styles.workCard}>
            <PrimaryParagraph text={work}/>
            <SmallGrayedText text={grading} />
        </View>
    )
}

export const GradeCard = ({work, grading, amount}) =>{
    return(
        <View style={styles.gradeCard}>
            <LargeText text={amount} />
            <SmallGrayedText text={grading} />
        </View>
    )
}

export const Job = () =>{
    return(
        <WorkCard work="Food packaging" grading="Full Time" />
    )
}

export const Hours = () =>{
    return(
        <GradeCard amount="16" grading="Hour" />
    )
}

export const Earnings = () =>{
    return(
        <GradeCard amount="168.0" grading="£10.50/hr" />
    )
}
