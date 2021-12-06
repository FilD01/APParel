import React, { useState, useEffect } from 'react';
import {    Text,
            StyleSheet,
            View,
    } from 'react-native';
// import { Icon } from 'react-native-elements'
function ItemBlock (props) {
    
    useEffect(() => {
        
        
    },[])
    return (
        <View style={styles.maincontainer}u>
        
            <View style={styles.leftcontainer}>
                <View style={styles.iconbox}>
  
                </View>
                <View style={styles.textbox}>
                    <Text style={styles.text}>{props.item}</Text> 
                </View>
            </View>
            <View style={styles.rightcontainer}>
                <View style={styles.textbox}>
                    <Text style={styles.text}>{props.value}</Text> 
                </View>
                <View style={styles.buttonbox}>
                    <View style={styles.leftbuttonbox}>
                    </View>
                    <View style={styles.rightbuttonbox}>
                    </View>
                </View>
            </View>
        
        </View>
    )
}
const styles = StyleSheet.create({
    maincontainer: {
        flexDirection: 'row',
        justifycontent: 'space-between',
        backgroundColor: 'white',
        marginTop: 12,
        marginHorizontal: 15,
        borderRadius: 20,
        width: '95%',
        height: 150,
    },
    leftcontainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifycontent: 'space-around',
    },
    rightcontainer: {
        flex: 1,
        flexDirection: 'column',
        justifycontent: 'space-around',
    },
    iconbox: {
        backgroundColor: 'blue',
        height: 100,
        width: 150,

    },
    textbox: {
        flex: 1,
    },
    text: {
        height: 'auto',
        textAlign: 'center',
        fontSize: 30,
    },
    leftbuttonbox: {
        flex: 1,
        backgroundColor: 'red',
        margin: 5,
    },
    rightbuttonbox: {
        flex: 1,
        backgroundColor: 'green',
        margin: 5,
    },
    buttonbox: {
        flex: 1,
        flexDirection: 'row',
    }
})
export default ItemBlock;
