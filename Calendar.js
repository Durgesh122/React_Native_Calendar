import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarComponent() {
   return (
      <View style={styles.container}>
        <Calendar
          style={styles.calendar}
          theme={{
            textMonthFontSize: 20,
            dayTextColor: 'black',
            textInactiveColor: 'black',
            textSectionTitleColor: 'black',
            textMonthFontWeight: 'bold',
            arrowColor: 'white',
            arrowStyle: {
              backgroundColor: '#6d2299',
              borderRadius: 50,
              height: 45,
              width: 45,
            },
          }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: 'center',
    marginTop: 20,
    marginLeft:40,
    marginRight:40
  
  },
  calendar: {
    height: 325,
    width: 300,
    backgroundColor: '#DFDBEE',
    margin:5
  },
  dayContainer: {
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'blue',
    width: 35,
  },
  todayDay: {
    backgroundColor: 'red', // Set today's background color to red
  },
  disabledDay: {
    backgroundColor: 'white',
  },
  dayText: {
    textAlign: 'center',
  },
  todayDayText: {
    color: 'white', // Set today's text color to white
    fontWeight: 'bold',
  },
  disabledDayText: {
    color: 'gray',
    fontWeight: 'bold',
  },
  arrowimage2: {
    height: 15,
    width: 10,
    marginLeft: 10,
    margin: 5,
  },
  arrowimage: {
    height: 15,
    width: 10,
    marginLeft: 5,
    margin: 5,
  },
});
