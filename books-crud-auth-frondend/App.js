import React, {Component,useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './scrns/home';
import Create from './scrns/create';
import view from './scrns/view';
import Detail from './scrns/details';
import Update from './scrns/update';
import Signup from './scrns/signup';

   


const Stack = createStackNavigator();
   


export default function App(){
    return(

         <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
         name="Create"
         component={Create}
        
         />
          <Stack.Screen 
         name="Home"
         component={Home}
        
         />

        <Stack.Screen 
         name="View"
         component={view}
        
         />
        <Stack.Screen 
         name="Detail"
         component={Detail}
        
         />
         <Stack.Screen 
         name="Update"
         component={Update}
        
         />
         <Stack.Screen 
         name="Signup"
         component={Signup}
        
         />


     </Stack.Navigator>
     </NavigationContainer>
    );
  }