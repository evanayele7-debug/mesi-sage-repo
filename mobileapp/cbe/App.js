import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screen/HomeScreen';
import DetalisScreen from './screen/DetalisScreens';
import ScrollViewExampleScreen from "./screen/ScrollviewExampleScreen";
import FlatListScreen from "./screen/FlatListScreen";
import FetchData from "./screen/FetchData";


export default function App() {
  const Stack = createNativeStackNavigator()
  return ( 
         <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" >
             <Stack.Screen name='Home' component={HomeScreen} />
              <Stack.Screen name='Detalis' component={DetalisScreen} />
              <Stack.Screen name='screen' component={ScrollViewExampleScreen} />
              <Stack.Screen name='Flatlist' component={FlatListScreen} />
              <Stack.Screen name='FetchData' component={FetchData} />
             
        
          </Stack.Navigator >
         </NavigationContainer>
  );
}
