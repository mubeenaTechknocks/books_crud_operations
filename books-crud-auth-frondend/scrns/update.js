import React, {useState} from 'react';
    import {StyleSheet, Text, TextInput, View, Modal,TouchableOpacity,
    Button,Alert,KeyboardAvoidingView} from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';

    const Update = ({navigation,route})=>{
       
    const getDetails = (type)=>{

        if(route.params){
            console.log(route.params)
            switch(type){
                case "bookname":
                    return route.params.bookname
                case "author":
                   return route.params.author
                case "description":
                   return route.params.description
            }
         }
         return ""
       }

    const [bookname,setBOOKNAME] = useState(getDetails("bookname"))
    const [author,setAUTHOR] = useState(getDetails("author"))
    const [description,setDESCRIPTION] = useState(getDetails("description"))
            

            const updateDetails = ()=>{
                fetch("http://192.168.42.178:4000/posts/"+route.params._id,{
                    method:"patch",
                    headers:{
                      'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({
                        id:route.params._id,
                        bookname,
                        author,
                        description
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    Alert.alert(`${bookname} is updated successfuly`)
                    navigation.navigate("View")
                })
                .catch(err=>{
                  Alert.alert("someting went wrong")
              })
            }

return (
    <View style={styles.container}>

 

   <View >

   <Text style={styles.input}>UPDATE DETAILS</Text>

   <View style={styles.inputContainer}>
   <TextInput 
    placeholder="BOOKNAME"
    value={bookname}
    keyboardType="email-address"
    underlineColorAndroid='transparent'
    onChangeText={text => setBOOKNAME(text)}/>
   </View>

   <View style={styles.inputContainer}>
    <TextInput 
     placeholder="AUTHOR"
     value={author}
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={text => setAUTHOR(text)}/>
   </View>

   <View style={styles.inputContainer}>
    <TextInput 
     placeholder="DESCRIPTION"
     value={description}
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={text => setDESCRIPTION(text)}/>
   </View>
  
  
  <Button   
    title= "UPDATE"
    color= "blue"
    onPress={() => updateDetails()}>
      </Button>
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
    
    export default Update
