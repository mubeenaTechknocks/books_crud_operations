import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert} from 'react-native';
import {Card} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
    


const view = ({navigation})=>{

     const [data,setData] = useState([])
     const [loading,setLoading]= useState(true)
    

    console.log(data,loading)
   
     const fetchData = ()=>{
        fetch("http://192.168.42.178:4000/posts")
        .then(res=>res.json())
        .then(results=>{
    
             setData(results)
             setLoading(false)
    

        }).catch(err=>{
            Alert.alert("someting went wrong")
        })
     }
    
     useEffect(()=>{
          fetchData()
     },[])
    
    const renderList = ((item)=>{
          return(
            <Card style={styles.mycard}
            
            onPress={()=>navigation.navigate("Detail",{item})}
            >
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.bookname}</Text>   
                       
                </View>
           </Card>
          )
    })
   return(
       <View style={{flex:1}}>
    
        <FlatList
              data={data}
              renderItem={({item})=>{
                return renderList(item)
              }}
              keyExtractor={item=>item._id}
              onRefresh={()=>fetchData()}
              refreshing={loading}
              />
          
       </View>
     
   ) 
}

const styles = StyleSheet.create({
    mycard:{
        margin:5
       
    },
    cardView:{
         flexDirection:"row",
         padding:6
    },
    text:{
        fontSize:18,
    },
})



export default view




