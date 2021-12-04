/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Colors from './styleFolder/Colors.js';
import firestore from '@react-native-firebase/firestore';
function App() {
    const [data,setData] = useState({});
    useEffect (() => {
        firestore().collection('datasets').doc('kasten').get().then( snap => {
            const monster = snap.data();
            setData(monster)
        }).catch('no')
    },[])
    console.log(data)
    const isDarkMode = useColorScheme() === 'dark';
    
    
    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text style={styles.textStyle}>{data.nummer}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    textStyle: {
        color: 'blue',
        fontSize: 60,
    },
});

export default App;
