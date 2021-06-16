    import React, {useState} from 'react';
    import {StyleSheet, Text, TextInput, View, Modal,TouchableOpacity,
    Button,Alert,KeyboardAvoidingView} from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
    
    
      const Create = ({navigation})=>{
        const [bookname,setBOOKKNAME] = useState("")
        const [author,setAUTHOR] = useState("")
        const [description,setDESCRIPTION] = useState("")
       const submitData = ()=>{
        
        fetch("http://192.168.42.178:4000/posts",{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              
                bookname,
                author,
                description
            })
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`${bookname} is saved successfuly`)
        })
        .catch(err=>{
          Alert.alert("someting went wrong")
      })
    }
      const logout =()=>{
        AsyncStorage.removeItem("tocken").then(()=>{
          navigation.navigate("Home")
        })
      }
       
    
  return (
    <View style={styles.container}>

 

   <View >

   <Text style={styles.input}>ADD BOOK DETAILS</Text>

   <View style={styles.inputContainer}>
   <TextInput 
    placeholder="BOOKNAME"
    keyboardType="email-address"
    underlineColorAndroid='transparent'
    onChangeText={text => setBOOKKNAME(text)}/>
   </View>

   <View style={styles.inputContainer}>
    <TextInput 
     placeholder="AUTHOR"
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={text => setAUTHOR(text)}/>
   </View>

   <View style={styles.inputContainer}>
    <TextInput 
     placeholder="DESCRIPTION"
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={text => setDESCRIPTION(text)}/>
   </View>
  
  
  <Button   
    title= "SAVE"
    color= "blue"
    onPress={() => submitData()}>
      </Button>
    
 <View style={{paddingVertical:20}}>
      <Button
       title= "View Recent Details "
       color= "red"
       onPress={()=>navigation.navigate('View')}> 
       </Button>
    </View>
    <View style={{paddingVertical:10}}>
      <Button
       title= "Logout "
       color= "blue"
       onPress={()=> logout()}> 
       </Button>
    </View>
    </View>
  
 
  
  </View>
  );
 }

const styles = StyleSheet.create({
  container:{
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
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

export default Create

