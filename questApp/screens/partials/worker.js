import React, {useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import {
    Job,
    Hours,
    Earnings 
} from '../../components/card';
import {
    LargeText, 
    BoldText 
} from '../../components/texts';
import styles from '../../styles/styles';


export const Work = () =>{
    return(
        <ScrollView horizontal={true}>
            <Job />
            <Hours />
            <Earnings />
        </ScrollView>
    )
}

export const CurrentDate = () =>{
    const[date, setDate] = useState(null);
    const[time, setTime] = useState();

    const getToday = () =>{
        let today = new Date().toDateString();
        setDate(today);
    }

    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let milliSeconds = new Date().getMilliseconds();
    let currentTime = hour + ' : ' + minutes + ' : ' + seconds + ' : ' + milliSeconds; 

    useEffect(() => {
        getToday();

        const interval = setInterval(() => {
            setTime(currentTime);
          }, 1000);
          return () => clearInterval(interval);
      }, );

    return(
        <View style={styles.center}>
            <BoldText text={date} />
            <LargeText text={time} />
        </View>
    )
}
