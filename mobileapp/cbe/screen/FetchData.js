import { ActivityIndicator, FlatList, Text, View } from "react-native"
import { useEffect, useState } from "react"


export default function FetchData() {
    const [data, setData] = useState()
    const [error,setError] = useState(false)


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((Response) => Response.json())
            .then(data => setData(data))
            .catch(()=>{
                setError(true)
            })

    }, [])

    if (data == undefined ) {
        return <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
           {error? <Text style ={{color:'red'}}>Error</Text> : <ActivityIndicator size='large'/>}
        </View>
    } else {return (
        <FlatList
            data={data}
            keyExtractor={(post) => post.id}
            renderItem={({ item }) => (
                <View style={{ marginBottom: 5 }} >
                    <Text style={{color:'red'  }} >post id: {item.id} </Text>
                    <Text style={{color:'red'  }} >title: {item.title} </Text>
                    <Text > {item.body} </Text>

                </View>
            )}
        />
    )
}}

    