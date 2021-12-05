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

import ItemBlock from './components/ItemBlock';

function App() {
    const amountOfItems = 10 
    const [data,setData] = useState({});
    useEffect (() => {
        firestore().collection('datasets').get().then( snap => {
            const monster = snap.docs;
            setData(monster)
        }).catch('no')
    },[])
    const isDarkMode = useColorScheme() === 'dark';
    
    console.log(data[0])
    
    const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
    const output= []
    for (let i=1; i<=amountOfItems; i++){
        output.push(<ItemBlock key={i}/>)
    }
  return (
    <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       	<ScrollView contentContainerStyle={styles.scrollviewcontainer} style={styles.scrollview}>
       	        {output} 
        </ScrollView>
    </SafeAreaView>
  );
//return (
//  <SafeAreaView style={backgroundStyle}>
//      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//      <View style={styles.mainbox}>
//          {for(let i=0;i<=4;i++){
//              <ItemBlock index=i/>
//          }}
//      </View>
//  </SafeAreaView>
//);
};

const styles = StyleSheet.create({
    mainbox: {
        flex: 1,
        flexWrap: 'wrap',
        height: 600,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    scrollview: {
        backgroundColor: 'grey',
        width: '100%',
        height: '100%',
    },
    scrollviewcontainer: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
});

export default App;
