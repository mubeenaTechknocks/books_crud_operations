import React, {Component,useState} from 'react';
    import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
    Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';
    import {Title,Card} from 'react-native-paper';

   


const Detail = (props,{navigation,route})=>{

    const {_id,bookname,author,description} = props.route.params.item
    console.log(_id)
    

    const deleteUser = ()=>{
        
        fetch("http://192.168.42.178:4000/posts/"+_id,{
            method:"delete",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              
            })
        })
        .then(res=>res.json())
        .then(deleteUser=>{
            Alert.alert(`${bookname} deleted`)
        })
        .catch(err=>{
          Alert.alert("someting went wrong")
      })
       }
    

    
    
    
   
  return (
      <View style={styles}>
         <View style={{alignItems:"center",margin:15}}>
             <Title>{bookname}</Title>
         </View>
            <View style={styles.cardContent}>
              
              <Text style={styles.mytext}>{author}</Text>
            </View>
         
         <Card style={styles.mycard}>
            <View style={styles.cardContent,{paddingVertical:30}}>
              
              <Text style={styles.mytext}>{description}</Text>
            </View>
         </Card>
            
         <View style={{flexDirection:"row",justifyContent:"space-around",padding:10}}>
            <Button 
            title="EDIT"
             mode="contained"
             theme={theme}
              onPress={() => {
               props.navigation.navigate("Update",
            {_id,bookname,author,description}
               )
              }}>

                 </Button>
            
           
            <Button 
            title="deleTE"
             mode="contained"
             theme={theme}
             onPress={() => deleteUser()}>
            
            </Button>
         </View>
        

      </View>
  )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}


const styles = StyleSheet.create({
    root:{
        flex:1
    },
    mycard:{
        margin:3
    },
cardContent:{
    flexDirection:"row",
    padding:8
},
mytext:{
    fontSize:18,
    marginTop:3,
    marginLeft:5
}
});

export default Detail