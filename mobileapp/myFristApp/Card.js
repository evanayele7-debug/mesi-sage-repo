import {View,Text,Image } from 'react-native'

export default function Card(){

    return<View>
        <Image  
        source= {require("./image.png")} 
        style={{width:200,height:200}}
        />
        <Text>buy now</Text>
    </View>
}