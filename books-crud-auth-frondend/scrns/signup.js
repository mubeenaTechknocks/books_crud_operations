import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Modal,TouchableOpacity,Button,Alert,KeyboardAvoidingView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Signup = ({navigation})=>{
    const [name,setNAME] = useState("")
    const [email,setEMAIL] = useState("")
    const [password,setPASSWORD] = useState("")
   const saveData = ()=>{
    
    fetch("http://192.168.42.178:4000/api/user/register",{
        method:"post",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          
            name,
            email,
            password
        })
    })
    .then(res=>res.json())
    .then(data=>{
        Alert.alert(`${name} is saved successfuly`)
        navigation.navigate('Create');
    

    })
    .catch(err=>{
      Alert.alert("someting went wrong")
  })
   }
  return (



    <View style={styles.container}>

     <Text style={styles.input}>Create an Account</Text>

      <View style={styles.inputContainer}>
   <TextInput 
    placeholder="NAME"
    keyboardType="email-address"
    underlineColorAndroid='transparent'
    onChangeText={text => setNAME(text)}/>
   </View>

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
    title= "Sign-in"
    color= "blue"
    onPress={() => saveData()}>
      </Button>

    
  
  
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   justifyContent: 'center',
  },

  input:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    color: 'blue',
    fontSize: 25,
    alignContent: 'center',
    alignItems: 'center'
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

export default Signup;