import { useRef,useEffect } from "react";
import { Animated,View,Button } from "react-native";

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const movex = useRef(new Animated.Value(0)).current

useEffect (()=>{
  Animated.timing(fadeAnim,{
    toValue:1,
    duration:10000,
    useNativeDriver:true

  }).start()
},[] )

function springAnimaation (){
  Animated.spring(movex,{
    toValue:200,
    useNativeDriver:true

  }).start() 
}

function animation (){
  Animated.spring(movex,{
    toValue:0,
    useNativeDriver:true

  }).start() 
}


  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
<Animated.View style={{
  width:200,
  height:200,
  backgroundColor:"red", 
  opacity:fadeAnim 


  }} ></Animated.View>
  
    <Animated.View style={{
      width:200,
      height:200,
      backgroundColor:"green",
      margin:10,
      transform: [{translateX:movex}]
    }} >

    </Animated.View>
    <Button title="animate"  onPress={springAnimaation} />              
    <Button title="back to place " onPress={animation} />              
    </View>
  );
}

