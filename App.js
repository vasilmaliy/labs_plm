import React from 'react';
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import BottomNavbar  from './src/navigation/BottomNavbar';

const App = () => {
    return (
        <View style={styles.container}>
            <BottomNavbar/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

export default App;