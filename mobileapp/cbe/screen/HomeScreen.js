import { Button, Text, View } from "react-native";


export default function HomeScreen({navigation}) {
  return ( <View style={{justifyContent:'flex-start',flex:'1',gap:5}} >
    
       <Text>Home page</Text>
       <Button title="Detalis" onPress={()=> {navigation.navigate('Detalis')}} /> 
      
       <Button title="Scrollview" onPress={()=> {navigation.navigate('screen')}} /> 

         <Button title="Flatlist" onPress={()=> {navigation.navigate('Flatlist')}} /> 
         <Button title="Fetch Data" onPress={()=> {navigation.navigate('FetchData')}} /> 

         

  </View>
           
  );
}