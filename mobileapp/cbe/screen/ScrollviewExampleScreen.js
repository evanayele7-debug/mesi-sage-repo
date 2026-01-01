import { ScrollView,View,Text } from "react-native";

import {countries} from "../data/Country";

export default function ScrollViewExampleScreen() {
    return <ScrollView  >
        {

            countries.map((c)=>(
                <View>
                    <Text>{c.name}</Text>
                    <Text>{c.code}</Text>
                    <Text>{c.continent}</Text>
                </View>
            ) )
        }
    </ScrollView>
};