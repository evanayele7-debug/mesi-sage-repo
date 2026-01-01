import { FlatList,View,Text } from "react-native"
import { countries } from "../data/Country"




export default function FlatListScreen () {
    return (
         <FlatList 
          data={countries}
          keyExtractor={(c)=>c.code }
          renderItem={({item})=>(
              <View style={{backgroundColor:'white', display:'flex', padding:15, borderBottomWidth:1, borderBottomColor: '#ccc '}} >
                <Text>{item.name}</Text>
                <Text>{item.code}</Text>
                <Text>{item.continent}</Text>
                <Text>{item.capital}</Text>
           
              </View>
          )}
          />
            

      
            

    )
}