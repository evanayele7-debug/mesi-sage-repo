import { Camera, CameraView } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import { Button, View,Image, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function App() {
const [hasPremission, setHasPremission] = useState();
const [photo,setPhoto] = useState ();
const cameraRef =useRef();
useEffect( ()=> {
  (async ()=>{const {status} = await Camera.requestCameraPermissionsAsync()
  setHasPremission(status === 'granted');})();

},[]);

async function takePhoto() {
  if (cameraRef.current){
     const data = await cameraRef.current.takePictureAsync();
     setPhoto(data.uri)
  }
}

if(hasPremission == null ) return <View><Text> requesting Premission</Text></View>
if(hasPremission == false ) return <View><Text> No Premission</Text></View>

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}} >
    <View style={{flex:1}} >
      <CameraView 
      style={{flex:1}} ref={cameraRef} facing="front" />
      <Image source={{uri:photo }} style={{height:500}} />
      <Button title="take Picture" onPress={takePhoto} />
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
