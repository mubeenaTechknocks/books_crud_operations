import React, {Component,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({navigation})=>{

    const [email,setEMAIL] = useState("")
    const [password,setPASSWORD] = useState("")
   const Signin = ()=>{
    fetch("http://192.168.42.178:4000/api/user/login",{
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        
        
          email,
          password
      })
  })
 // .then(res=>res.json())
  //.then(async (data)=>{
    .then(async (res) => {
    if (res.status == 202) {
      const cookie = res.headers.get('auth-tocken');
      await AsyncStorage.setItem('tocken', cookie);
     // setLoading(false);
     Alert.alert('login success');
     navigation.navigate('Create');
    //   props.navigation.replace('Create');
    } else if (res.status == 400) {
     // setLoading(false);
      Alert.alert('No user found');
      
    } else if (res.status == 401) {
      //setLoading(false);
      Alert.alert('passwod doesnot match');
    }

    else if (res.status == 402) {
      //setLoading(false);
      Alert.alert('Enter Valid Email/password');
    }
    
})
   }

    return(

        

    <View style={styles.container}>
         <Text style={{paddingBottom:30,paddingLeft:30,fontSize:25,color:'blue'}}>WELCOME TO LIBRARY</Text>

   <View style={styles.inputContainer}>
    <TextInput 
     placeholder="EMAIL"
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={text => setEMAIL(text)}/>
   </View>

   <View style={styles.inputContainer}>
    <TextInput 
     placeholder="PASSWORD"
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={text => setPASSWORD(text)}/>
   </View>

    <Button   
    title= "login"
    color= "blue"
    onPress={() => Signin()}>
    </Button>
      <TouchableOpacity
        onPress={()=>navigation.navigate('Signup')}>
        <Text style={{fontSize:20,padding:80,color:'blue'}}>Create an Account?</Text>
      </TouchableOpacity>
  
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   color: '#b2beb5',
   justifyContent: 'center',
  },
   inputContainer: {
    borderBottomColor: 'blue',
    backgroundColor: '#FFFFFF',
    borderRadius:5,
    borderBottomWidth: 1,
    width:350,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
})



  export default Home