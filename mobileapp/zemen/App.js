import { View,Text,TextInput,Button,NumericInput } from "react-native";
import { useState } from "react";

export default function App (){
  return ( <View>
   <h5>Frist Name <TextInput placeholder="  " 
    style={{ borderWidth:2, padding:6, color:"balck" }}/> </h5>
    <h5> Last Name <TextInput placeholder=" " 
    style={{ borderWidth:2, padding:6, color:"balck" }}/></h5>
    <h5> Gender <TextInput placeholder=" " 
    style={{ borderWidth:2, padding:6, color:"balck" }}/></h5>
           <h5>Age<TextInput keyboardType="numeric" 
             style={{ borderWidth:1,padding:3,color:'balck' }}/>
             </h5>

              <Button title="submit"
               onPress={()=>{
               alert()
     }}/>

  </View>
  )
}