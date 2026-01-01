import { View,Text,Image,TextInput,Button,ActivityIndicator, Switch,ScrollView} from "react-native";
import Card from "./Card";
import { useState } from "react";

export default function app (){

  const [x,setx]= useState(0)
  const [isOn,setIson] = useState(false)

  return<ScrollView>
   <View>
    <Text style={{textAlign:"center", 
      margin:20,
      color:"#070707ff"
    }} >
       hello</Text>
        <Text  >  the vaule:{x} </Text>
     <Image 
     source={{ uri: "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2560%2Cc_limit/DSC_5903.jpg"}}
     style={{width:200,height:200}}
     />
     <TextInput placeholder="enter your name" 
     style={{ borderWidth:10,padding:10,margin:15 }}/>
     <Button title="submit" onPress={()=>{
      setx(30)
      console.lod('the value is x: ',x)
     }} />
     <ActivityIndicator  size="large" color="green" />
    <Switch style={{}}value={isOn} onValueChange={setIson}/>
     <Text style={{color:'green', fontSize:40, margin:100 }} >
      styled text
     </Text>
     <View style={{flex: 1,flexDirection:"row", justifyContent:"space-between"}}>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         <Card/>
     </View>
  </View >
  </ScrollView>
}